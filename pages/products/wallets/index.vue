<template>
  <div id="wallets">
    <section class="body" data-aos="fade-up" >
      <div class="single-column">
        <nuxt-link to="/products" class="button button-default button-small">Back to Products</nuxt-link>
        <h1>Our Wallets</h1>
        <h3>Our feature-rich wallets are known for their advanced functionality which allows users with deep 
            know-how of blockchain technologies to leverage them today.</h3>
        <h3>As we are on the cutting edge, it is our privilege to push forward the concept of what defines the 
            experiences of what a wallet can be beyond just a place to store your digital assets.</h3>


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
              { title: 'Scatter Desktop', value: 'desktop' },
              { title: 'Scatter Bridge', value: 'bridge' }
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