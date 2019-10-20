<template>
  <div class="page-index">
    <div class="container">
      <BlogSection :blogs="blogs"/>
    </div>
  </div>
</template>

<script>
  
  import BlogSection from "@/components/BlogSection"

  // Import blogs by language
  import blogsEn from '@/content/en/blogsEn.js'
  import blogsCn from '@/content/cn/blogsCn.js'

  export default {
    async asyncData ({app}) {

      // Select which array of blog posts to show according to language selected
      const blogs = app.i18n.locale === 'en' ? blogsEn : blogsCn
      
      // Returns an object of a single blog post
      async function asyncImport (blogName) {
        const wholeMD = await import(`~/content/${app.i18n.locale}/blog/${blogName}.md`)
        return wholeMD.attributes
      }

      // Go and get each blog post in that language
      return Promise.all(
        blogs.map(
          blog => asyncImport(blog))).then((res) => {
            return {
              blogs: res
            }
          }
        )
    },
    
    components: { BlogSection },

    transition: {
      name: 'slide-fade'
    },

    head () {
      return {
        title: this.$t('indexPageHead.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Scatter" },
          { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
          { property: "og:title", content: this.$t('indexPageHead.title') },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.$t('indexPageHead.description') },
          { name: "twitter:image", content: this.ogImage }
        ]
      };
    },

    computed: {
      ogImage: function () {
        return;
      }
    }
  }
</script>
