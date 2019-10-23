<template>
    <div id="products">

        <section class="body" data-aos="fade-up" >
          <div class="body-text">
            <div class="single-column">
              <nuxt-link to="/" class="button button-default button-small">Back home</nuxt-link>
              <h1>Scatter is a leading provider of blockchain technology</h1>
              <h3>Our mission is to connect developers and users to cutting edge technologies so that they can benefit from the most important features of decentralization such as real ownership, security, and privacy.</h3>
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