<template>
  <div>
    <button class="btn btn-primary" @click="$refs.walletsModal.openModal()">
      <small>SOL</small> {{ $t('nav.connect_wallet') }}
    </button>

    <Modal ref="walletsModal">
      <template #header>
        <h3>Conntect Wallet</h3>
      </template>

      <template #body>
        <div class="wallets-list">
          <button v-for="wallet in wallets" :key="wallet" class="btn btn-opacity-primary">
            {{ wallet }}
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
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
        'Bonfida'
      ] as string[]
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
