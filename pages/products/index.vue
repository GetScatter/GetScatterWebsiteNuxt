<template>
    <div id="products">

        <section class="body" data-aos="fade-up" >
          <div class="body-text">
            <div class="single-column">
              <nuxt-link :to="localePath('index')" class="button button-default button-small"><i class="fal fa-chevron-left"></i> &nbsp; {{ $t("backhome") }}</nuxt-link>
              <h1>{{ $t("products.title") }}</h1>
              <h3>{{ $t("products.introduction") }}</h3>
            </div>
          </div>
        </section>

        <ProductsComponent></ProductsComponent>

    </div>
</template>

<script>

    import ProductsComponent from '@/components/ProductsComponent'

    export default {
        name: 'Products',
        components: {
          ProductsComponent
        },
    }

</script>

<style lang="scss">
    
    @import "@/assets/_variables.scss";

    #products {
       h1 {
        margin:1rem 0 2rem 0;

        @media (max-width: $breakpoint-mobile) {
            margin-top:0rem;
        }
       }
    }

    

</style>