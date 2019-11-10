<template>
    <nav class="nav-list" role="navigation">
      <nuxt-link class="nav-item" :to="localePath('products')">{{ $t("header.products") }}</nuxt-link>
      <nuxt-link class="nav-item" :to="localePath('apps')">{{ $t("header.apps") }}</nuxt-link>
      <nuxt-link class="nav-item" :to="localePath('developers')">{{ $t("header.developers") }}</nuxt-link>
      <nuxt-link class="nav-item" :to="localePath('articles')">{{ $t("header.articles") }}</nuxt-link>
      <!-- <LangSwitcher/> -->
    </nav>

</template>

<script>

    export default {
        data() {
            return {
              
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "@/assets/_variables.scss";

    .nav-list {
        display:flex;
        flex-direction:row;
        height:104px;
        align-items:center;
        justify-content:center;

        @media (max-width: $breakpoint-tablet) {
          height:54px;
        }

        @media (max-width: $breakpoint-mobile) {
          flex-direction:row;
          display: flex;
          justify-content: flex-end;
        }

        .nav-item {
            margin: 0 1.2rem;
            text-decoration:none;
            font-family: 'Poppins', sans-serif;
            font-weight:bold;
            font-size:$font-size-medium;
            color:$blue;
            white-space: nowrap;

            @media (max-width: $breakpoint-tablet) {
              margin: 0 .6rem;
              font-size:$font-size-standard;
            }

            @media (max-width: $breakpoint-mobile) {
              margin: 0 .6rem;
            }

            &.exact-active-link {
              color: black;
            }
        }
    }
    

</style>