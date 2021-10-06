import { WalletAdapter } from '@solana/wallet-base'
import EventEmitter from 'eventemitter3'
import { PublicKey, Transaction } from '@solana/web3.js'

type PhantomEvent = 'disconnect' | 'connect'
type PhantomRequestMethod = 'connect' | 'disconnect' | 'signTransaction' | 'signAllTransactions'

interface PhantomProvider {
  publicKey?: PublicKey
  isConnected?: boolean
  autoApprove?: boolean
  signTransaction: (transaction: Transaction) => Promise<Transaction>
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  on: (event: PhantomEvent, handler: (args: any) => void) => void
  request: (method: PhantomRequestMethod, params: any) => Promise<any>
}

export class PhantomWalletAdapter extends EventEmitter implements WalletAdapter {
  _provider: PhantomProvider | undefined
  _cachedCorrectKey?: PublicKey
  constructor() {
    super()
    this.connect = this.connect.bind(this)
  }

  get connected() {
    return this._provider?.isConnected || false
  }

  get autoApprove() {
    return this._provider?.autoApprove || false
  }

  // eslint-disable-next-line
  async signAllTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    if (!this._provider) {
      return transactions
    }

    return this._provider.signAllTransactions(transactions)
  }

  get publicKey() {
    // Due to weird phantom bug where their public key isnt quite like ours
    if (!this._cachedCorrectKey && this._provider?.publicKey)
      this._cachedCorrectKey = new PublicKey(this._provider.publicKey.toBase58())

    return this._cachedCorrectKey || null
  }

  // eslint-disable-next-line
  async signTransaction(transaction: Transaction) {
    if (!this._provider) {
      return transaction
    }

    return this._provider.signTransaction(transaction)
  }

  async connect() {
    if (this._provider) {
      return
    }

    const provider: PhantomProvider = (window as any).solana

    provider.on('connect', () => {
      this._provider = provider
      this.emit('connect')
    })

    if (!provider.isConnected) {
      await provider.connect()
    }

    this._provider = provider
    this.emit('connect')
  }

  disconnect() {
    if (this._provider) {
      this._provider.disconnect()
      this._provider = undefined
      this.emit('disconnect')
    }
  }
}
