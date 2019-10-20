<template>
  <section id="blog">
    <div class="">
      
    </div>
    <section class="blogs">
      <blog-card
        v-for="blog in blogs"
        :key="blog.name"
        :blog="blog" />
    </section>
  </section>
</template>
<script>

import BlogCard from "@/components/BlogCard.vue";

export default {
  components: { BlogCard },
  props: {
    blogs: {
      type: Array
    }
  }
}
</script>
<style lang="scss">

#blog {
  a {
    text-decoration:none;
  }
}



</style>

