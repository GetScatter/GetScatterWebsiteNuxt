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
              <h2>Libraries</h2>
              
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