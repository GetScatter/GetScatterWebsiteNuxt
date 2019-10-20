<template>
    <nav class="nav-list" role="navigation">
      <nuxt-link class="nav-item" to="/products">Products</nuxt-link>
      <nuxt-link class="nav-item" to="/apps">Apps</nuxt-link>
      <nuxt-link class="nav-item" to="/developers">Developers</nuxt-link>
      <nuxt-link class="nav-item" to="/blog">Blog</nuxt-link>
      <LangSwitcher/>
    </nav>

</template>

<script>

    import LangSwitcher from '@/components/LangSwitcher'

    export default {
        components: { LangSwitcher },
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
          justify-content:flex-end;
        }

        .nav-item {
            margin: 0 1.2rem;
            text-decoration:none;
            font-family: 'Poppins', sans-serif;
            font-weight:bold;
            font-size:$font-size-medium;
            color:$blue;

            @media (max-width: $breakpoint-tablet) {
              margin: 0 .6rem;
              font-size:$font-size-small;
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