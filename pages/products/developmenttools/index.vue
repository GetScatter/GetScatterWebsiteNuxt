<template>
    <div id="developmenttools">

        <section class="body" data-aos="fade-up" >
          <div class="body-text">
            <div class="single-column">
              <h1>Focused on developers</h1>
              <h3>Scatter's libraries are used in hundreds of applications and are a proven, easy method of connecting to advanced networks and <nuxt-link to="/partners">partnered wallets</nuxt-link>.</h3>
              <nuxt-link to="/developers"></nuxt-link>
            </div>
          </div>
        </section>

        <section class="body" data-aos="fade-up" >
          <div class="body-text">
            <div class="single-column">
              <h1>Our Wallets</h1>
              <h3>Our feature-rich wallets are known for their advanced functionality which allows users with deep 
                  know-how of blockchain technologies to leverage them today.</h3>
              <h3>As we are on the cutting edge, it is our privilege to push forward the concept of what defines the 
                  experiences of what a wallet can be beyond just a place to store your digital assets.</h3>

              <hr>
            </div>
          </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'Products',
        components: { },
    }

</script>
<style lang="scss">
    
    @import "@/assets/_variables.scss";

    #developmenttools {
       h1 {
        margin-top:4rem;
       }

    }

</style>