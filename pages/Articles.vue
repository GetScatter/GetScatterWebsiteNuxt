<template>
  <section class="pressarticles">
        <div class="single-column">

          <nuxt-link to="/articles/why-we-build-on-eosio" class="article-card" data-aos="slide-up">
            <img src="@/assets/images/blog/why-we-build-on-EOSIO/choose.png">
            <section class="content" data-aos="flip-left">
              <h2>Why we build on EOSIO</h2>
              <h4>Ledger technology advances quickly, and Scatter has placed a large bet that EOSIO technology may be one of the top contenders going forward. Let's break down why we think so.</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/an-adhoc-poll-about-keeping-your-EOS-tokens-on-exchanges" class="article-card type-one" data-aos="slide-up">
            <img src="@/assets/images/blog/an-adhoc-poll-about-keeping-your-EOS-tokens-on-exchanges/quiz.png">
            <section class="content" data-aos="flip-left">
              <h2>An adhoc poll about keeping your EOS tokens on exchanges</h2>
              <h4>It's important to be objective in our opinions on how complex systems work. We ran an adhoc poll to learn a bit more about how our users store their digital assets.</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/scatter-embed-one-codebase-many-wallets" class="article-card type-two" data-aos="slide-up">
            <img src="@/assets/images/blog/scatter-embed-one-codebase-many-wallets/embed.png">
            <section class="content" data-aos="flip-left">
              <h2>Scatter Embed - one codebase, many wallets</h2>
              <h4>We've taken a big step forward with the architecture of our wallets, and we'd like to introduce you to Walletpack which is our open-source blockchain wallet library.</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/scatter-releases-a-block-producer-candidate" class="article-card type-three" data-aos="slide-up">
            <img src="@/assets/images/blog/scatter-releases-a-block-producer-candidate/bp_candidate.png">
            <section class="content" data-aos="flip-left">
              <h2>Scatter releases a Block Producer candidate</h2>
              <h4>This is our love letter to the EOS community. We want all of you to know how important each and every one of you are to us. Scatter is a community, and we are all in this together.</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/about-wallets-SDKs-and-trust-on-the-blockchain" class="article-card" data-aos="slide-up">
            <img src="@/assets/images/blog/about-wallets-SDKs-and-trust-on-the-blockchain/1_7xDknqWLDZ7w4j2D0JNWAA.png">
            <section class="content" data-aos="flip-left">
              <h2>About Wallets, SDKs, and trust on the blockchain</h2>
              <h4>Let's dive a little deeper into how these complex systems work together to create new experiences and opportunities.</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/about-keys-keypairs-and-accounts" class="article-card type-one" data-aos="slide-up">
            <img src="@/assets/images/blog/about-keys-keypairs-and-accounts/image_1.png">
            <section class="content" data-aos="flip-left">
              <h2>About Keys, Keypairs, and Accounts on EOSIO</h2>
              <h4>Some of the fundamentals of smart contract platforms can be hard to grasp, so we have put together a quick primer.</h4>
            </section>
          </nuxt-link>
        

        </div>
  </section>
</template>

<script>

  export default {
    
    head () {
      return {
        title: this.$t('indexPageHead.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Articles by the Scatter team about EOS, Wallets, Blockchain, and running an open-source business" },
          { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
          { property: "og:title", content: this.$t('indexPageHead.title') },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.$t('indexPageHead.description') },
          { name: "twitter:image", content: this.ogImage }
        ]
      };
    },


  }
</script>

<style lang="scss" rel="stylesheet/scss">

    @import "@/assets/_variables.scss";

    .pressarticles {

        .single-column {
          padding-top: 12rem;
        }

        .article-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          text-decoration: none;
          margin-bottom: 12rem;
          position: relative;
          background-color:$blue;

          img {
            width: 100%;
            opacity: 0.2;
          }

          &.type-one {

            margin-bottom: 22rem;

            .content {

              width:80%;
              top:12rem;
              bottom:initial;
              right:initial;
              left:0;

            }
            
          }

          &.type-two {

            margin-bottom: 28rem;

            .content {

              width:80%;
              top:18rem;
              bottom:initial;
              right:initial;
              right:0;

            }
            
          }

          &.type-three {

            margin-bottom: 22rem;

            .content {

              width:80%;
              top:16rem;
              bottom:initial;
              right:initial;
              left:0;

            }
            
          }

          .content {
            margin-top: 30px;
            font-size: 20px;
            position: absolute;
            width: 60%;
            right: 0;
            bottom: -3rem;
            background-color: white;
            padding: 4rem;
            box-shadow: 0 10px 16px rgba($blue, 0.12);

            
          }
        }

    }

</style>