<template>
    <div id="developmenttools">

        <section class="body" data-aos="fade-up" >
          <div class="body-text">
            <div class="single-column">
              <nuxt-link :to="localePath('products')" class="button button-default button-small">{{ $t('products.backtoproducts') }}</nuxt-link>
              <h1>{{ $t('developertools.title') }}</h1>
              <h3 v-html="$t('developertools.information')"></h3>
            </div>
          </div>
        </section>

        <section class="body" data-aos="fade-up" >

            <div class="full-width">
              <div class="flex-row">
                <a href="https://github.com/GetScatter/scatter-js/" class="half">
                  <img src="@/assets/scatterjs.png">
                  <h3>ScatterJS</h3>
                  <p v-html="$t('developertools.scatterjs.description')"></p>
                </a>
                <a href="https://github.com/GetScatter/scatter-sharp" class="half">
                  <img src="@/assets/scattersharp.png">
                  <h3>Scatter Sharp &amp; EOS Sharp</h3>
                  <p v-html="$t('developertools.scattersharp.description')"></p>
                </a>
                
              </div>

              <div class="flex-row">
                <a href="https://github.com/GetScatter/walletpack/" class="half">
                  <img src="@/assets/walletpack.png">
                  <h3>WalletPack</h3>
                  <p v-html="$t('developertools.walletpack.description')"></p>
                </a>
                <a href="https://github.com/GetScatter/tokenwrap/" class="half">
                  <img src="@/assets/tokenwrap.png">
                  <h3>Tokenwrap</h3>
                  <p v-html="$t('developertools.tokenwrap.description')"></p>
                </a>
                
              </div>

              <div class="flex-row">
                <a href="https://github.com/GetScatter/morpheos/" class="half">
                  <img src="@/assets/morpheos.png">
                  <h3>Morpheos</h3>
                  <p v-html="$t('developertools.morpheos.description')"></p>
                </a>
                <a href="https://github.com/GetScatter/watcheosio/" class="half">
                  <img src="@/assets/watcheosio.png">
                  <h3>Watcheosio</h3>
                  <p v-html="$t('developertools.watcheosio.description')"></p>
                </a>
              </div>

            </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'Development Tools',
        head () {
          return {
            title: 'Development tools that Scatter builds',
            meta: [
              { 
                hid: 'description', 
                name: 'description', 
                content: 'Scatter provides developers with many great libraries for connecting to advanced blockchain networks, with ScatterJS and ScatterSharp being the most widely used.'
              }
            ]
          }
        }
    }

</script>
<style lang="scss">
    
    @import "@/assets/_variables.scss";

    #developmenttools {
      h1 {
        margin:1rem 0 2rem 0;
      }

      .full-width {
        flex-direction:column;

        .flex-row {
          align-items:stretch;
          margin:4rem 0;

          @media (max-width: $breakpoint-mobile) {
            flex-direction:column;
            margin:0;
            padding:0;

            .half {
              margin:2rem 0;
            }
          }

            a {
              text-decoration:none;
              background:$blue;
              border-radius:10px;
              color:white;
              font-weight:normal;
              overflow:hidden;
              transition:box-shadow 0.12s ease-in-out;

              &:hover {
                box-shadow:inset 0 0 0 10px lighten($blue,12%);
                z-index:1;
              }

              img {
                margin:10px;
                width:calc(100% - 20px);
              }

              h3 {
                margin:0rem 4rem 0;
                color:white;
              }

              p {
                color:white;
                margin:0 4rem 4rem;

                a {
                  font-weight:bold;
                  text-decoration:underline;
                }
              }
             }
         }
      }

      

    }

</style>