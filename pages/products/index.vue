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

        <section class="maximum-width" data-aos="fade-up" >
          <div class="products">
            <nuxt-link class="product wallets" to="/products/wallets">
              <h2>Scatter Wallets</h2>
              <p>Scatter's forte has always been to be at the cutting edge of defining what a wallet can be.</p>
              <img src="../../assets/wallets.png">
            </nuxt-link>
            <nuxt-link class="product blockproducers" to="/products/blockproducers">
              <h2>Block Production</h2>
              <p>With our node on EOS Mainnet, we have a proven technical foothold in infrastructure.</p>
              <img src="../../assets/blockproducers.png">
            </nuxt-link>
            <nuxt-link class="product developmenttools" to="/products/developmenttools">
              <h2>Development Tools</h2>
              <p>Hundreds of applications have implemented our libraries to make connecting to wallets and networks easy.</p>
              <img src="../../assets/developmenttools.png">
            </nuxt-link>
            <!-- <nuxt-link class="product promotionalchannels" to="/products/promotionalchannels">
              <h2>Promotional Channels</h2>
              <p>We are providing unique experiences and channels for users and apps to find one another.</p>
              <img src="../../assets/promotionalchannels.png">
            </nuxt-link> -->
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

    #products {
       h1 {
        margin:1rem 0 2rem 0;

        @media (max-width: $breakpoint-mobile) {
            margin-top:0rem;
        }
       }
    }

    .products {
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
        padding:0 2rem;

        .product {
          height:50vh;
          width:calc(33.33% - 4rem);
          padding:4rem;
          margin:2rem;
          border-radius:10px;
          background-color:$blue;
          transition:box-shadow 0.12s ease-in-out;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
          text-decoration: none !important;
          background-size:cover;
          background-position:top right;
          background-repeat:no-repeat;
          position:relative;

          @media (max-width: $breakpoint-mobile) {
            padding:2rem;
          }

          img {
            position:absolute;
            width:60%;
            top:4rem;
            right:4rem;

              @media (max-width: $breakpoint-small-desktop) {
                  width:40%;
                  top:2rem;
                  right:2rem;
              }

              @media (max-width: $breakpoint-tablet) {
                  width:35%;
                  top:2rem;
                  right:2rem;
              }

              @media (max-width: $breakpoint-mobile) {
                  width:50%;
                  top:1rem;
                  right:1rem;
              }
          }

          @media (max-width: $breakpoint-small-desktop) {
              width:100%;
              margin:0 2rem 2rem;
          }

          @media (max-width: $breakpoint-tablet) {
              width:100%;
              margin:0 0rem 2rem;
          }

          &.wallets {
            background-color:darken($blue,1%);
            background-image:url('../../assets/zigzag.png');
          }

          &.developmenttools {
            background-color:darken($blue,5%);
            background-image:url('../../assets/circles.png');
          }

          &.blockproducers {
            background-color:darken($blue,3%);
            background-image:url('../../assets/wiggles.png');
          }

          &.promotionalchannels {
            background-color:darken($blue,8%);
            background-image:url('../../assets/lines.png');
          }

          &:hover {
            box-shadow:inset 0 0 0 10px lighten($blue,12%);
            z-index:1;
          }

          h2, p {
            color:white;
            text-decoration:none;
            max-width:60%;
          }


          h2 {
            margin-bottom:1rem;
          }
        }
    }

</style>