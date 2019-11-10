<template>
  <section class="pressarticles">
        <div class="single-column">

          <nuxt-link :to="localePath('why-we-build-on-eosio')" class="article-card" data-aos="slide-up">
            <img src="@/assets/images/blog/why-we-build-on-EOSIO/choose.png">
            <section class="content" data-aos="flip-left">
              <h2>{{ $t("articles.whywebuildoneosio.title") }}</h2>
              <h4>{{ $t("articles.whywebuildoneosio.summary") }}</h4>
            </section>
          </nuxt-link>

          <nuxt-link :to="localePath('an-adhoc-poll-about-keeping-your-EOS-tokens-on-exchanges')" class="article-card type-one" data-aos="slide-up">
            <img src="@/assets/images/blog/an-adhoc-poll-about-keeping-your-EOS-tokens-on-exchanges/quiz.png">
            <section class="content" data-aos="flip-left">
              <h2>{{ $t("articles.adhocpoll.title") }}</h2>
              <h4>{{ $t("articles.adhocpoll.summary") }}</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/scatter-embed-one-codebase-many-wallets" class="article-card type-two" data-aos="slide-up">
            <img src="@/assets/images/blog/scatter-embed-one-codebase-many-wallets/embed.png">
            <section class="content" data-aos="flip-left">
              <h2>{{ $t("articles.scatterembed.title") }}</h2>
              <h4>{{ $t("articles.scatterembed.summary") }}</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/scatter-releases-a-block-producer-candidate" class="article-card type-three" data-aos="slide-up">
            <img src="@/assets/images/blog/scatter-releases-a-block-producer-candidate/bp_candidate.png">
            <section class="content" data-aos="flip-left">
              <h2>{{ $t("articles.scattersblockproducer.title") }}</h2>
              <h4>{{ $t("articles.scattersblockproducer.summary") }}</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/about-wallets-SDKs-and-trust-on-the-blockchain" class="article-card" data-aos="slide-up">
            <img src="@/assets/images/blog/about-wallets-SDKs-and-trust-on-the-blockchain/1_7xDknqWLDZ7w4j2D0JNWAA.png">
            <section class="content" data-aos="flip-left">
              <h2>{{ $t("articles.walletsandsdks.title") }}</h2>
              <h4>{{ $t("articles.walletsandsdks.summary") }}</h4>
            </section>
          </nuxt-link>

          <nuxt-link to="/articles/about-keys-keypairs-and-accounts" class="article-card type-one" data-aos="slide-up">
            <img src="@/assets/images/blog/about-keys-keypairs-and-accounts/image_1.png">
            <section class="content" data-aos="flip-left">
              <h2>{{ $t("articles.keypairsandaccouts.title") }}</h2>
              <h4>{{ $t("articles.keypairsandaccouts.summary") }}</h4>
            </section>
          </nuxt-link>
        

        </div>
  </section>
</template>

<script>

  export default {
    name: "articles",
    head () {
      return {
        head () {
          return {
            title: 'Articles by the team at Scatter',
            meta: [
              { 
                hid: 'description', 
                name: 'description', 
                content: 'Learn more about the EOS, Ethereum, and blockchain ecosystems through articles written by the experienced and knowledgable team at Scatter.'
              }
            ]
          }
        }
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

          @media (max-width: $breakpoint-tablet) {
              margin-bottom: 6rem !important;
          }

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

            @media (max-width: $breakpoint-tablet) {
                position:relative !important;
                padding:2rem;
                left:initial !important;
                right:initial !important;
                bottom:initial !important;
                top:initial !important;
                margin:initial !important;
                width:100% !important;
            }
          }
        }

    }

</style>