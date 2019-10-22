<template>
    <div id="blockproducers">

        <section class="body" data-aos="fade-up" >
          <div class="body-text">
            <div class="single-column">
              <nuxt-link to="/products" class="button button-default button-small">Back to Products</nuxt-link>
              <h1>Our Infrastructure</h1>
              <h3>We believe that providing custom implementations of blockchain infrastructure brings with it great value
                  for the open-source community, and for our clients. By running our own nodes, load balancers, and APIs, we
                  have the opportunity to provide a uniquely effective system on which to run your business.</h3>
              <img class="maximum-width-image" alt="The best desktop blockchain wallet experience" src="../../../assets/bp_candidate.png">

              <h2>EOS Mainnet</h2>
              <h4>We are proud to announce that Scatter’s Block Producer candidate is live. If you already know us and what we do for the ecosystem, head on over to our voting portal and give us some love.</h4>
              <p>The account is “vote4scatter” which is easy to remember, clear, and to the point. If you want to know more about why we have spun up this top-notch infrastructure, and why we have chosen to do it now, read on.</p>
              <nuxt-link to="/vote" alt="Vote for our Block Producer" class="button">Learn more</nuxt-link>
            </div>
          </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'ScatterWallets',
        head () {
          return {
            title: 'Block Producer Infrastructure',
            meta: [
              { 
                hid: 'description', 
                name: 'description', 
                content: 'Only the best hardware is used to run our block production node on the EOS Mainnet.'
              }
            ]
          }
        }
    }

</script>
<style lang="scss">
    @import "@/assets/_variables.scss";

    #blockproducers {
        background-color:white;
        text-align:left;

        h1 {
          margin:1rem 0 2rem 0;
        }

    }




</style>