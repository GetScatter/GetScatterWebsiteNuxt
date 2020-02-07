<template>
  <div>
      <!-- Mailchimp -->
      <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/0cd4c231af47d2b7d40a5eac6/53e1013808d32c1ae46a9c6ac.js");</script>
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
