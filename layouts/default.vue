<template>
  <div>
    <Header></Header>
    <Navigation></Navigation>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Navigation from '@/components/Navigation.vue'

  export default {
        name: 'Default',
        components: { 
          Header,
          Footer,
          Navigation
        },
        data(){return {

        }},
        head: {
          bodyAttrs: {
            class: 'scroll'
          }
        }

    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    @import "@/assets/_variables.scss";

</style>
