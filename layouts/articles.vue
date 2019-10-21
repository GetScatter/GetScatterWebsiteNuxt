<template>
  <div>
    
      <ArticleHeader></ArticleHeader>
      <section class="single-column blog-content">
        <transition name="fade">
          <nuxt />
        </transition>
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
