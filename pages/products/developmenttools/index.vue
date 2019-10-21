<template>
    <div id="developmenttools">

        <section class="body" data-aos="fade-up" >
          <div class="body-text">
            <div class="single-column">
              <h1>Focused on developers</h1>
              <h3>Scatter's libraries are used in hundreds of applications and are a proven, easy method of connecting to advanced networks and <nuxt-link to="/partners">partnered wallets</nuxt-link>.</h3>
              <nuxt-link to="/developers"></nuxt-link>
            </div>
          </div>
        </section>

        <section class="body" data-aos="fade-up" >

            <div class="single-column">
              <div class="flex-row">
                <a href="https://github.com/GetScatter/scatter-js/" class="half">
                  <img src="@/assets/scatterjs.png">
                  <h3>ScatterJS</h3>
                  <p>The JavaScript library that hundreds of web applications use to allow users to connect to <router-link to="/wallets">15+ wallets</router-link> (not just ours) on multiple blockchains. Even wrappers like Block.one's UAL and EOS New York's Transit use/support ScatterJS.</p>
                </a>
                <a href="https://github.com/GetScatter/scatter-sharp" class="half">
                  <img src="@/assets/scattersharp.png">
                  <h3>Scatter Sharp &amp; EOS Sharp</h3>
                  <p>The C# libraries that Unity3d games are using to build blockchain enabled games.</p>
                </a>
                
              </div>

              <div class="flex-row">
                <div class="half">
                  <img src="@/assets/walletpack.png">
                  <h3>WalletPack</h3>
                  <p>A JavaScript library for creating multi-blockchain wallets. This is what we're now using to run Scatter wallets.</p>
                  <a href="https://github.com/GetScatter/walletpack/" class="button">Learn more</a>
                </div>
                <div class="half">
                  <img src="@/assets/tokenwrap.png">
                  <h3>Tokenwrap</h3>
                  <p>A JavaScript library that wraps various EOSIO based NFT tokens and allows developers easy setup and usage on their apps.</p>
                  <a href="https://github.com/GetScatter/tokenwrap/" class="button">Learn more</a>
                </div>
                
              </div>

              <div class="flex-row">
                <div class="half">
                  <img src="@/assets/morpheos.png">
                  <h3>Morpheos</h3>
                  <p>A JavaScript library that helps EOSIO JavaScript libraries support both eosjs1 and eosjs2.</p>
                  <a href="https://github.com/GetScatter/morpheos/" class="button">Learn more</a>
                </div>
                <div class="half">
                  <img src="@/assets/watcheosio.png">
                  <h3>Watcheosio</h3>
                  <p>A tiny lightweight JavaScript watcher for EOSIO chains.</p>
                  <a href="https://github.com/GetScatter/watcheosio/" class="button">Learn more</a>
                </div>
              </div>

              <hr>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'Products',
        components: { },
    }

</script>
<style lang="scss">
    
    @import "@/assets/_variables.scss";

    #developmenttools {
       h1 {
        margin-top:4rem;
       }

    }

</style>