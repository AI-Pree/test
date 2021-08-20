import SolanaWalletAdapter from '@project-serum/sol-wallet-adapter'

export default [
  {
    name: 'Sollet',
    url: 'https://www.sollet.io',
    getAdapter ({ providerUrl, endpoint }) {
      return new SolanaWalletAdapter(providerUrl, endpoint)
    }
  },
  {
    name: 'Sollet Extension',
    url: 'https://www.sollet.io',
    installUrl: 'https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno',
    getAdapter ({ endpoint }) {
      if (window.sollet === undefined) {
        return
      }
      return new SolanaWalletAdapter(window.sollet, endpoint)
    }
  }
]
