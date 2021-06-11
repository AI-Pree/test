<template>
  <section class="token-stats">
    <div class="container">
      <div class="text-center">
        <h3 class="section-title">HGEN</h3>
        <p class="text-gray">Token of the Solana</p>
        <div class="actions">
          <a href="#" class="btn btn-primary btn-desc">
            IDO
            <span>You can trade HGEN</span>
          </a>
          <a href="#" class="btn btn-primary btn-desc">
            GOVERNANCE
            <span>You can vote as a holder</span>
          </a>
        </div>
        <h4>HGEN token to invest in your family’s future</h4>
      </div>
      <div class="stats">
        <div class="total-supply-chart">
          <img src="~/assets/images/total-supply-chart.png" alt="">
          <div class="text-center">
            <a href="#" class="btn btn-primary">Beginner’s Guide to DeFi</a>
          </div>
        </div>
        <div class="stat-items">
          <div class="stat-item">
            <div>
              <div class="stat-item-value">00%</div>
              <div class="stat-item-title">Liquidity</div>
              <div class="stat-item-tokens">000.000 tokens</div>
            </div>
          </div>
          <div class="stat-item">
            <div>
              <div class="stat-item-value">00%</div>
              <div class="stat-item-title">Liquidity</div>
              <div class="stat-item-tokens">000.000 tokens</div>
            </div>
          </div>
          <div class="stat-item">
            <div>
              <div class="stat-item-value">00%</div>
              <div class="stat-item-title">Liquidity</div>
              <div class="stat-item-tokens">000.000 tokens</div>
            </div>
          </div>
          <div class="stat-item">
            <div>
              <div class="stat-item-value">00%</div>
              <div class="stat-item-title">Liquidity</div>
              <div class="stat-item-tokens">000.000 tokens</div>
            </div>
          </div>
          <div class="stat-item">
            <div>
              <div class="stat-item-value">00%</div>
              <div class="stat-item-title">Liquidity</div>
              <div class="stat-item-tokens">000.000 tokens</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .token-stats {
    padding: 2rem 0;

    .actions {
      margin-top: 1.5rem;
      
      > * {
        margin-bottom: 1.5rem;
        
        @media (min-width: map-get($breakpoints, sm)) {
          &:not(:last-child) {
            margin-right: 1rem;
          }
        }
      }
    }

    .stats {
      margin-top: 4rem;
      display: flex;
      align-items: center;

      > div {
        flex: 1 1 50%;
        margin-bottom: 3rem;
      }

      @media (max-width: map-get($breakpoints, md)) {
        flex-direction: column;

        > div {
          flex: 1 1 100%;
        }
      }

      .total-supply-chart {
        > img {
          max-width: 100%;
          margin-bottom: 3rem;
        }
      }

      .stat-items {

        @media (min-width: map-get($breakpoints, md)) {
          padding-left: 5rem;
        }

        @media (max-width: map-get($breakpoints, md)) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          .stat-item {
            width: 50%;
          }
        }

        .stat-item {
          margin-bottom: 1rem;
          padding: 0 0.5rem;

          > div {
            background: #161421;
            box-shadow: 0px 0px 80px rgba(255, 255, 255, 0.3), 0px 0px 10px #793AFF;
            border-radius: 2rem;
            text-align: center;
            padding: 1rem;
          }

          &-value {
            display: inline-block;
            font-weight: 700;
            font-size: 1.5rem;
          }

          &:nth-child(1) .stat-item-value {
            background: linear-gradient(90deg, #0870DB 0%, #222AA0 100%);
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
          &:nth-child(2) .stat-item-value {
            background: linear-gradient(90deg, #04C7FF 0%, #93FEA0 100%);
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
          &:nth-child(3) .stat-item-value {
            background: linear-gradient(90deg, #2BDBBB 0%, #C260F4 100%);
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
          &:nth-child(4) .stat-item-value {
            background: linear-gradient(90deg, #FFFA83 0%, #E56E01 100%);
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
          &:nth-child(5) .stat-item-value {
            background: linear-gradient(90deg, #D800EF 0%, #F70044 100%);
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }

          &-title {
            color: $text-gray;
            margin: 0.5rem 0;
          }

          &-tokens {
            font-weight: 700;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
</style>
