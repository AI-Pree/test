<template>
  <div>
    <button class="btn btn-primary" @click="$refs.walletsModal.openModal()">
      <small>SOL</small> {{ $t('nav.connect_wallet') }}
    </button>

    <Modal ref="walletsModal">
      <template v-slot:header>
        <h3>Conntect Wallet</h3>
      </template>

      <template v-slot:body>
        <div class="wallets-list">
          <button class="btn btn-opacity-primary" v-for="wallet in wallets" :key="wallet">
            {{ wallet }}
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wallets: [
        'Raydium',
        'Sollet',
        'Sollet Extension',
        'Solong',
        'Ledger',
        'MathWallet',
        'Phantom',
        'Bonfida',
      ],
    }
  }
}
</script>

<style lang="scss">
  .wallets-list {
    > .btn {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
    }
  }
</style>