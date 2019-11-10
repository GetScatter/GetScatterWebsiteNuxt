<template>
    <div id="blockproducers">

        <section class="body" data-aos="fade-up" >
          <div class="body-text">
            <div class="single-column">
              <nuxt-link :to="localePath('products')" class="button button-default button-small">{{ $t('products.backtoproducts') }}</nuxt-link>
              <h1 v-html="$t('blockproducers.title')"></h1>
              <h3>{{ $t('blockproducers.information') }}</h3>
              <img class="maximum-width-image" alt="The best desktop blockchain wallet experience" src="../../../assets/bp_candidate.png">

              <h2>EOS Mainnet</h2>
              <h4 v-html="$t('blockproducers.mainnet.description')"></h4>
              <p v-html="$t('blockproducers.mainnet.information')"></p>
              <nuxt-link :to="localePath('vote')" class="button">{{ $t('blockproducers.mainnet.button') }}</nuxt-link>
            </div>
          </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'ScatterWallets',
        head () {
          return {
            title: 'Block Producer Infrastructure',
            meta: [
              { 
                hid: 'description', 
                name: 'description', 
                content: 'Only the best hardware is used to run our block production node on the EOS Mainnet.'
              }
            ]
          }
        }
    }

</script>
<style lang="scss">
    @import "@/assets/_variables.scss";

    #blockproducers {
        background-color:white;
        text-align:left;

        h1 {
          margin:1rem 0 2rem 0;
        }

    }




</style>