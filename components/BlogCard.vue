<template>
  <article class="blog">
    <nuxt-link 
      :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})"
    >
      <ImageResponsive
        :imageURL="`blog/${blog.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="blog.cardAlt" />
      <h2 class="blog__title">
        {{ blog.title }}
      </h2>
      <p class="blog__description">
        {{ blog.description }}
      </p>
    </nuxt-link>
  </article>
</template>

<script lang="js">
  export default {
    props: {
      blog: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">

article.blog {
  margin:0 0 6rem;

  h2 {
    margin-bottom:1rem;
  }
}

</style>
