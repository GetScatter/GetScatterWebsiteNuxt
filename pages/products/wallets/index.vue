<template>
  <div id="wallets">
    <section class="body" data-aos="fade-up" >
      <div class="single-column">
        <nuxt-link :to="localePath('products')" class="button button-default button-small">{{ $t('products.backtoproducts') }}</nuxt-link>
        <h1>{{ $t('wallets.title') }}</h1>
        <h3>{{ $t('wallets.information') }}</h3>


        <tabs
          :tabs="wallettabs"
          :currentTab="currentTab"
          :wrapper-class="'default-tabs'"
          :tab-class="'default-tabs__item'"
          :tab-active-class="'default-tabs__item_active'"
          :line-class="'default-tabs__active-line'"
          @onClick="handleClick"
          :class="wallettabs"
        />

        
      </div>
    </section>
    <div v-if="currentTab === 'desktop'">
      <Desktop></Desktop>
    </div>
    <div v-if="currentTab === 'bridge'">
      <Bridge></Bridge>
    </div>
  </div>
</template>

<script>

    import Tabs from 'vue-tabs-with-active-line';
    import Bridge from './Bridge';
    import Desktop from './Desktop';

    export default {
        name: 'ScatterWallets',
        data () {
          return {
            wallettabs: [
              { title: 'Desktop', value: 'desktop' },
              // { title: 'Extension', value: 'extension' },
              // { title: 'Mobile', value: 'mobile' },
              { title: 'Bridge', value: 'bridge' }
            ],
        currentTab: 'desktop',
          }
        },
        components: {
          Tabs,
          Desktop,
          Bridge
        },
        methods: {
          handleClick(newTab) {
            this.currentTab = newTab;
          },
        }
    }

</script>
<style lang="scss">
    
    @import "@/assets/_variables.scss";

    #wallets {
        background-color:white;
        text-align:left;

        h1 {
          margin:1rem 0 2rem 0 !important;
        }

        .tabs {
          margin-top:6rem;
        }

    }




</style>