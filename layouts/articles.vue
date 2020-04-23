<template>
  <div>
      <!-- Mailchimp -->
      <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/0cd4c231af47d2b7d40a5eac6/53e1013808d32c1ae46a9c6ac.js");</script> 
      <ArticleHeader></ArticleHeader>
      <section class="single-column blog-content">
        <nuxt />
        <hr>
      </section>
      <ArticleFooter></ArticleFooter>
    
  </div>
</template>

<script>
  import ArticleHeader from '@/components/ArticleHeader.vue'
  import ArticleFooter from '@/components/ArticleFooter.vue'

  export default {
        name: 'Default',
        components: { 
          ArticleHeader,
          ArticleFooter,
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

<style lang="scss" rel="stylesheet/scss">

    @import "@/assets/_variables.scss";

    .blog-content {
      img {
        margin:4rem 0;
      }

      ul, ol {
        padding:2rem;
      }
    }

</style>
