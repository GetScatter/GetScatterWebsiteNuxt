<template>
    <div id="home">
        <section id="lead-in" data-aos="fade-up">
            <div class='wrap'>
              <div class='tri' v-for="i in [...Array(80)].keys()"></div>
            </div>
            <section class="lead-content">
                <h1>
                    {{ $t("home.title") }}
                </h1>
                <h3>
                    <article v-html="$t('home.subtitle')"></article>
                    <hr>
                    <span v-html="$t('home.available')"></span>
                </h3>
                <nuxt-link :to="localePath('download')" class="button">{{ $t('home.downloadbutton') }}</nuxt-link>
            </section>
            <section class="lead-images">
                <div class="web-image">
                    <img src="../assets/scatter_desktop.png">
                </div>
                <div class="mobile-image">
                    <img src="../assets/mobile_scatter_simple_exchange_dark.png">
                </div>
            </section>
        </section>
        <section class="maximum-width">
            <ProductsComponent></ProductsComponent>
        </section>
        <hr>
        <section class="single-column" data-aos="fade-up">
            <nuxt-link :to="localePath('vote')" id="vote">
                <img src="../assets/love.png" class="loveme">
                <h1 v-html="$t('home.vote.title')"></h1>
                <h3>{{ $t("home.vote.information") }}</h3>
            </nuxt-link>
        </section>
        <hr>
        <section class="full-width standard-padding" id="blockchain-for-everyone" data-aos="fade-up">
            <section class="half-width">
                <h1>{{ $t("home.bridge.title") }}</h1>
                <h3>{{ $t("home.bridge.information") }}</h3>
                <router-link :to="localePath('products/wallets/bridge')" class="button">{{ $t("home.bridge.button") }}</router-link>
            </section>
            <section class="half-width">
                <img src="../assets/scatter_simple_start_people.png">
            </section>
        </section>
        <section class="full-width standard-padding" id="empowering-developers" data-aos="fade-up">
            <section class="half-width">
                <img src="../assets/scatter_simple_start_devs.png">
            </section>
            <section class="half-width">
                <h1>{{ $t("home.developers.title") }}</h1>
                <h3>{{ $t("home.developers.information") }}</h3>
                <router-link :to="localePath('developers')" class="button">{{ $t("home.developers.button") }}</router-link>
            </section>
        </section>
        <!--<section class="full-width standard-padding" id="card-set" data-aos="fade-up">-->
            <!--<section class="half-width">-->
                <!--<h1 class="huge">{{ $t("home.extras.title") }}</h1>-->
                <!--&lt;!&ndash; <div class="card">-->
                    <!--<img src="../assets/card_cart.png">-->
                    <!--<h3>{{ $t("home.extras.marketplace.title") }}</h3>-->
                    <!--<p>{{ $t("home.extras.marketplace.information") }}</p>-->
                <!--</div> &ndash;&gt;-->
                <!--<div class="card">-->
                    <!--<img src="../assets/card_exchange.png">-->
                    <!--<h3>{{ $t("home.extras.keys.title") }}</h3>-->
                    <!--<p>{{ $t("home.extras.keys.information") }}</p>-->
                <!--</div>-->
                <!--<div class="card">-->
                    <!--<img src="../assets/card_ridl.png">-->
                    <!--<h3>{{ $t("home.extras.ridl.title") }}</h3>-->
                    <!--<p>{{ $t("home.extras.ridl.information") }}</p>-->
                <!--</div>-->
            <!--</section>-->
            <!--<section class="half-width">-->
                <!--<div class="card">-->
                    <!--<img src="../assets/card_wallet.png">-->
                    <!--<h3>{{ $t("home.extras.identity.title") }}</h3>-->
                    <!--<p>{{ $t("home.extras.identity.information") }}</p>-->
                <!--</div>-->
                <!--<div class="card">-->
                    <!--<img src="../assets/card_identity.png">-->
                    <!--<h3>{{ $t("home.extras.exchange.title") }}</h3>-->
                    <!--<p>{{ $t("home.extras.exchange.information") }}</p>-->
                <!--</div>-->
            <!--</section>-->
        <!--</section>-->
    </div>
</template>

<script>
    import TopDapps from '@/components/TopDapps.vue'
    import ProductsComponent from '@/components/ProductsComponent'

    const LOGOS = [
        {url:''}
    ];

    export default {
        name: 'Home',
        head () {
          return {
            title: 'Download Scatter Desktop for Windows, Mac, and Linux',
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: 'It is critical that you only download Scatter from us! Any other provider is untrustworthy and likely will steal your private keys and the associated accounts.'
              }
            ]
          }
        },
        components: { TopDapps, ProductsComponent },
        data(){return {
            LOGOS,
        }}

    }

</script>

<style lang="scss">

    @import "@/assets/_variables.scss";

    $total: 200;
    $time: 10s;

    #lead-in {
        display:flex;
        flex-direction:row;
        align-items:center;
        margin:0 auto 4rem;
        background-image:url('../assets/nebula_bg.jpg');
        background-position:center right;
        background-repeat:no-repeat;
        background-size:cover;
        width: 100%;
        min-height:880px;
        overflow:hidden;

        .wrap {
            transform-style: preserve-3d;
            perspective: 1800px;
        }

        .tri {
            height: 0;
            width: 0;
            position: absolute;
            top: 50%;
            right: 50%;
        }

        @for $i from 1 through $total {
            $size: random(10) * 1px;
            $rotate: random(360) * 1deg;
            .tri:nth-child(#{$i}){
                border: $size solid rgba(lighten($blue, 30%),random(1));
                border-radius:50%;
                margin-left: -$size/2;
                margin-top: -$size/2;
                transform: rotate($rotate) translate3d(0,0,-1500px) scale(0);
                animation: anim#{$i} $time infinite linear;
                animation-delay: $i * -($time/$total);
                opacity: 0;
            }

            @keyframes anim#{$i}{
                0% {
                    opacity: 0.35;
                    transform: rotate($rotate * 1.5) translate3d(random(1000) * 1px, random(1000) * 1px,1000px) scale(1);
                }
            }
        }

        @media (max-width: $single-column) {
            flex-direction:column;
            min-height:auto;
        }

        @media (max-width: $breakpoint-mobile) {
            margin:0;
        }

        .lead-content {
            width: 50%;
            padding:0 8rem;

            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:center;

            @media (min-width: $breakpoint-large-desktop) {
                padding:0 8rem 0 16rem;
            }

            @media (max-width: $single-column) {
                width: 80%;
                padding:4rem 0 12rem;
            }

            @media (max-width: $breakpoint-mobile) {
                width: 80%;
                padding:0rem;
            }

            h1 {
                margin-top:0;
                color:white;

                @media (max-width: $single-column) {
                    margin:6rem 0 2rem;
                }
            }

            h3 {
                color:white;
                line-height: 24px;
                margin-bottom:2rem;

                span, a {
                    color:white;
                }

                span {
                    font-size:$font-size-standard;
                    opacity:0.6;
                }
            }

            hr {
                margin:1.5rem 0;
                opacity:0.24;
            }

            .button {
                margin-bottom:2rem;
                font-size:$font-size-big;
            }

            .low-key {
                font-size:$font-size-standard;
                max-width:320px;
                opacity:0.34;
            }
        }

        .lead-images {
            position:relative;
            height:80vh;
            width:50vw;
            min-height:800px;

            @media (max-width: $single-column) {
                width: 80%;
                padding:4rem 0;
                height:50vh;
            }

            @media (max-width: $breakpoint-mobile) {
                width: 100%;
                padding:4rem 0 0rem;
                overflow: hidden;
                min-height:540px;
            }

            .web-image {
                min-height:680px;
                width: 50vw;
                display:flex;
                align-items:center;

                @media (max-width: $single-column) {
                    width: 100%;
                    min-height:400px;
                }

                img {
                    overflow:hidden;
                    border-radius:6px;
                    border:1px solid rgba(255,255,255,0.72);
                    box-shadow: 0 10px 20px 0 rgba(7,83,123,0.19);
                    height:40%;
                    position: absolute;
                    top:4rem;
                    right: 0;
                    height: auto;
                    width: 100%;
                    max-width: 920px;
                }

            }

            .mobile-image {
                height:100vh;
                position:absolute;
                top:0;
                right:0;

                img {
                    height:60vh;
                    width:auto;
                    position:absolute;
                    right:-3vw;
                    top:15vh;
                    overflow:hidden;
                    border-radius:6px;
                    box-shadow: 0 10px 20px 0 rgba(7,83,123,0.39);
                }

            }
        }
    }

    .reminder-to-vote {
        display:block;
        margin:0 0 4rem;
        width:100%;
        padding:4rem;
        font-family: 'Poppins', sans-serif;
        font-weight:bold;
        color:$blue;
        text-decoration:none;
        padding-bottom:6px;
        display:flex;
        justify-content:center;
        align-items:center;
        background:lighten($blue,44%);
        border-radius:20px;

        img {
            width:25%;
        }
    }

    #bridge-box {
        height:320px;
        text-align:center;
        background:$blue;
        border-radius:20px;
        background-image:url('../assets/gs_mobile_apps_homebg.png');
        background-size:cover;
        padding:4rem;
        position:relative;
        overflow:hidden;

        &:hover .button {
            transform:scale(1.2);
        }

        &:after {
            content:'';
            position:absolute;
            z-index:3;
            display:block;
            height:8rem;
            left:0;
            right:0;
            bottom:0;
            background-image: linear-gradient(180deg, rgba($blue,0) 0%, rgba($blue,0.5) 100%);
        }

        @media (max-width: $breakpoint-tablet) {
            display:none;
        }

        h3 {
            color:white;
            margin-bottom:0rem;
            font-size:22px;
        }

        h5 {
            color:white;
            opacity:0.44;
        }

        img {
            margin-top:0rem;
            max-width: calc(100% - 4rem);
            box-shadow: 0 10px 20px 0 rgba(7,83,123,0.39);
            overflow:hidden;
            border-radius:4px;
        }

        .button {
            position:absolute;
            z-index:4;
            box-shadow: 0 10px 20px 0 rgba(7,83,123,0.39);
            left:8rem;
            right:8rem;
            bottom:2rem;
            max-width: calc(100% - 16rem);
            transition:all 0.12s ease-in-out;

            @media (max-width: $breakpoint-tablet) {
                left:4rem;
                right:4rem;
                max-width: calc(100% - 8rem);
            }
        }
    }

    #vote {
        text-align:center;
        background-position: center bottom;
        background-repeat:no-repeat;
        position:relative;
        margin:0 0 6rem;
        text-decoration:none !important;
        display:flex;
        flex-direction:column;
        padding:4rem;
        border-radius:20px;
        transition:background-color 0.12s ease-in-out;

        &:hover {
          background-color:lighten($blue,44%);
        }

    }

    #blockchain-for-everyone {

        @media (max-width: $single-column) {
            flex-direction:column-reverse;

            img {
                max-width:100%;
            }
        }

    }

    #empowering-developers {

        @media (max-width: $single-column) {
            flex-direction:column;

            img {
                max-width:100%;
            }
        }

    }

    #card-set {
        align-items:flex-start;

        h1.huge {
            font-size:$font-size-enormous;
            line-height:calc(#{$font-size-enormous} * 1.2);
            color:$darkgrey;
            margin-top:0;
        }

        .card {
            background: #FFFFFF;
            box-shadow: 0 10px 44px 0 rgba(7,153,255,0.08);
            border-radius: 20px;
            margin:4rem 0 4rem;
            padding-bottom:4rem;

            h3 {
                margin:0 4rem 2rem;
                color:$black;
                font-size:$font-size-big;
            }

            p {
                margin:0 4rem 4rem 4rem;
                font-family: 'Poppins', sans-serif;
                color:$grey;
            }
        }
    }

</style>
