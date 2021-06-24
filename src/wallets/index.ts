import { Transaction, PublicKey } from '@solana/web3.js'
import EventEmitter from 'eventemitter3'
import { MathWalletAdapter } from './adapters/math'
import { PhantomWalletAdapter } from './adapters/phantom'
import { SolongWalletAdapter } from './adapters/solong'

export interface WalletAdapter extends EventEmitter {
  publicKey: PublicKey | null
  signTransaction: (transaction: Transaction) => Promise<Transaction>
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>
  connect: () => any
  disconnect: () => any
}

export interface WalletProvider {
  name: string
  url: string
  icon: string
  adapter?: () => WalletAdapter
}

export const walletProviders: WalletProvider[] = [
  {
    name: 'Sollet',
    url: 'https://sollet.io',
    icon: 'todo'
  },
  {
    name: 'Sollet Extension',
    url: 'https://sollet.io',
    icon: 'todo'
  },
  {
    name: 'Solong',
    url: 'https://solongwallet.com',
    icon: 'todo',
    adapter: () => new SolongWalletAdapter()
  },
  {
    name: 'Ledger',
    url: 'https://www.ledger.com',
    icon: 'todo'
  },
  {
    name: 'MathWallet',
    url: 'https://mathwallet.org',
    icon: 'todo',
    adapter: () => new MathWalletAdapter()
  },
  {
    name: 'Phantom',
    url: 'https://phantom.app/',
    icon: 'todo',
    adapter: () => new PhantomWalletAdapter()
  },
  {
    name: 'Bonfida',
    url: 'https://bonfida.com/wallet',
    icon: 'todo'
  }
]
