import EventEmitter from 'eventemitter3'
import { PublicKey, Transaction } from '@solana/web3.js'

import { WalletAdapter } from '..'

export class SolongWalletAdapter extends EventEmitter implements WalletAdapter {
  publicKey: PublicKey | null = null
  _onProcess: boolean

  constructor() {
    super()
    this._onProcess = false
  }

  signTransaction(transaction: Transaction) {
    return (window as any).solong.signTransaction(transaction)
  }

  async signAllTransactions(transactions: Transaction[]) {
    const solong = (window as any).solong

    if (solong.signAllTransactions) {
      return solong.signAllTransactions(transactions)
    } else {
      const result: Transaction[] = []

      for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i]
        const signed = await solong.signTransaction(transaction)
        result.push(signed)
      }

      return result
    }
  }

  connect() {
    if (this._onProcess) {
      return
    }

    if ((window as any).solong === undefined) {
      console.warn('Please install solong wallet from Chrome ')
      return
    }

    this._onProcess = true
    ;(window as any).solong
      .selectAccount()
      .then((account: any) => {
        this.publicKey = new PublicKey(account)
        this.emit('connect', this.publicKey)
      })
      .catch(() => {
        this.disconnect()
      })
      .finally(() => {
        this._onProcess = false
      })
  }

  disconnect() {
    if (this.publicKey) {
      this.publicKey = null
      this.emit('disconnect')
    }
  }
}
