<template>
  <div id="footer">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-9ralMzdK1QYsk4yBY680hmsb4/hJ98xK3w0TIaJ3ll4POWpWUYaA2bRjGGujGT8w" crossorigin="anonymous">
    <hr>
    <section class="footer-links">
        <nav>
            <nuxt-link :to="localePath('index')">{{ $t("footer.links.home") }}</nuxt-link>
            <nuxt-link :to="localePath('products')">{{ $t("footer.links.products") }}</nuxt-link>
            <nuxt-link :to="localePath('developers')">{{ $t("footer.links.developers") }}</nuxt-link>
            <nuxt-link :to="localePath('vote')">{{ $t("footer.links.vote") }}</nuxt-link>
            <!-- <nuxt-link :to="localePath('connect')">{{ $t("footer.links.connect") }}</nuxt-link> -->
            <!-- <nuxt-link :to="localePath('vision')">{{ $t("footer.links.vision") }}</nuxt-link> -->
            <a href="https://support.get-scatter.com" title="Get the help you need">{{ $t("footer.links.support") }}</a>
            <nuxt-link :to="localePath('partners')">{{ $t("footer.links.partners") }}</nuxt-link>
            <nuxt-link :to="localePath('code-of-conduct')">{{ $t("footer.links.code") }}</nuxt-link>
            <nuxt-link :to="localePath('branding')">Branding</nuxt-link>
        </nav>
    </section>

    <section class="footer-content">

        <svg class="footer-logo" width="190px" height="208px" viewBox="0 0 95 104" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <path d="M46.4362981,56 C45.6550442,56 45.0060122,55.9176505 44.4891827,55.7529489 C43.9723532,55.5882473 43.5637034,55.4036707 43.2632212,55.1992136 C42.9627389,54.9947565 42.7524044,54.7988214 42.6322115,54.6114024 C42.5120186,54.4239833 42.4519231,54.3018788 42.4519231,54.2450852 C42.4519231,54.0406281 42.5,53.8219758 42.5961538,53.5891219 C42.6923082,53.3562679 42.8124993,53.1404553 42.9567308,52.9416776 C43.1009623,52.7428998 43.2572107,52.5753611 43.4254808,52.4390564 C43.5937508,52.3027516 43.7439897,52.2346003 43.8762019,52.2346003 C44.044472,52.2346003 44.1826918,52.3368273 44.2908654,52.5412844 L44.4711538,52.7116645 C44.5673082,52.8025343 44.7025232,52.8962424 44.8768029,52.9927916 C45.0510826,53.0893408 45.2674266,53.1773696 45.5258413,53.2568807 C45.7842561,53.3363918 46.0877386,53.3761468 46.4362981,53.3761468 C47.1935134,53.3761468 47.8124976,53.1574945 48.2932692,52.7201835 C48.7740409,52.2828724 49.0144231,51.6893878 49.0144231,50.9397117 C49.0144231,50.4172101 48.8852176,49.9515093 48.6268029,49.542595 C48.3683881,49.1336808 48.0288483,48.7531691 47.6081731,48.4010485 C47.1874979,48.0489279 46.7067335,47.7053315 46.1658654,47.370249 C45.6249973,47.0351665 45.0721182,46.6858909 44.5072115,46.3224115 C43.9423049,45.9589322 43.3894258,45.567062 42.8485577,45.146789 C42.3076896,44.726516 41.8269252,44.2437773 41.40625,43.6985583 C40.9855748,43.1533393 40.6460349,42.5371376 40.3876202,41.8499345 C40.1292054,41.1627314 40,40.3761512 40,39.4901704 C40,38.7291356 40.1382198,37.9624329 40.4146635,37.1900393 C40.6911072,36.4176458 41.0727139,35.6821791 41.5594952,34.9836173 C42.0462765,34.2850555 42.620189,33.6319384 43.28125,33.0242464 C43.942311,32.4165544 44.6574481,31.8883814 45.4266827,31.4397117 C46.1959173,30.9910419 46.9981929,30.6389266 47.8335337,30.3833552 C48.6688744,30.1277838 49.5072073,30 50.3485577,30 C51.0697151,30 51.7187471,30.1079063 52.2956731,30.3237221 C52.872599,30.539538 53.359373,30.8433794 53.7560096,31.2352556 C54.1526462,31.6271317 54.4591335,32.0985119 54.6754808,32.6494102 C54.891828,33.2003086 55,33.8165104 55,34.4980341 C55,35.1454816 54.8798089,35.7815609 54.6394231,36.406291 C54.3990373,37.031021 54.0805308,37.6216661 53.6838942,38.1782438 C53.2872576,38.7348215 52.8395458,39.2487962 52.3407452,39.7201835 C51.8419446,40.1915707 51.3311324,40.6004788 50.8082933,40.9469201 C50.2854541,41.2933613 49.7776467,41.563127 49.2848558,41.7562254 C48.7920648,41.9493238 48.3593769,42.0458716 47.9867788,42.0458716 C47.662258,42.0458716 47.3707946,41.9748806 47.1123798,41.8328965 C46.8539651,41.6909124 46.6376211,41.5148547 46.4633413,41.3047182 C46.2890616,41.0945817 46.1538466,40.8730898 46.0576923,40.6402359 C45.961538,40.407382 45.9134615,40.2000883 45.9134615,40.0183486 C45.9134615,39.8706852 45.934495,39.7741374 45.9765625,39.7287025 C46.01863,39.6832676 46.0787256,39.6633901 46.156851,39.6690695 C46.2349764,39.6747488 46.334134,39.6917867 46.4543269,39.7201835 C46.5745198,39.7485803 46.7127396,39.7627785 46.8689904,39.7627785 C47.3738006,39.7627785 47.9326892,39.5980794 48.5456731,39.2686763 C49.1586569,38.9392731 49.7355742,38.5190065 50.2764423,38.0078637 C50.8173104,37.4967209 51.2710318,36.9344723 51.6376202,36.3211009 C52.0042086,35.7077296 52.1875,35.1114053 52.1875,34.5321101 C52.1875,33.9414562 52.0342563,33.4757553 51.7277644,33.1349934 C51.4212725,32.7942316 50.901446,32.6238532 50.1682692,32.6238532 C49.7115362,32.6238532 49.2157479,32.7062028 48.6808894,32.8709043 C48.146031,33.0356059 47.6081758,33.2656167 47.0673077,33.5609436 C46.5264396,33.8562706 46.0036083,34.2140652 45.4987981,34.6343381 C44.9939879,35.0546111 44.5492808,35.5174724 44.1646635,36.0229358 C43.7800462,36.5283992 43.4705541,37.07361 43.2361779,37.6585845 C43.0018017,38.2435591 42.8846154,38.8540816 42.8846154,39.4901704 C42.8846154,40.1603354 43.0138208,40.7594993 43.2722356,41.2876802 C43.5306503,41.8158611 43.873195,42.2957602 44.2998798,42.7273919 C44.7265646,43.1590236 45.2103338,43.5565731 45.7512019,43.9200524 C46.29207,44.2835317 46.8449491,44.644166 47.4098558,45.0019659 C47.9747624,45.3597659 48.5276415,45.728919 49.0685096,46.1094364 C49.6093777,46.4899538 50.0931469,46.9102205 50.5198317,47.370249 C50.9465166,47.8302775 51.2890612,48.3414127 51.547476,48.9036697 C51.8058907,49.4659268 51.9350962,50.110525 51.9350962,50.8374836 C51.9350962,51.5417248 51.7938716,52.2090401 51.5114183,52.8394495 C51.2289649,53.469859 50.8413486,54.0179094 50.3485577,54.4836173 C49.8557668,54.9493252 49.2728399,55.3184783 48.5997596,55.5910878 C47.9266793,55.8636973 47.2055327,56 46.4362981,56 Z" id="path-1"></path>
                <filter x="-473.3%" y="-234.6%" width="1046.7%" height="646.2%" filterUnits="objectBoundingBox" id="filter-2">
                    <feOffset dx="0" dy="10" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="22" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.0274509804   0 0 0 0 0.6   0 0 0 0 1  0 0 0 0.389805507 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="Oval" fill="#0799FF" cx="48" cy="43" r="22"></circle>
                <g id="Scatter">
                    <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                    <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                </g>
            </g>
        </svg>
        <span>
            {{ $t("footer.tagline") }}
        </span>
        <nuxt-link :to="localePath('download')" class="button">{{ $t("footer.download") }}</nuxt-link>
    </section>
    <section class="body">
        {{ $t("footer.copyright") }} <br> <nuxt-link :to="localePath('terms')">{{ $t("footer.terms") }}</nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
            return {}
        }
}
</script>

<style lang="scss">

@import "@/assets/_variables.scss";

#footer {

    .footer-links nav {
        margin:4rem 0;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;

        a {
            padding: 2rem;
            text-decoration:none;
            font-family: 'Poppins', sans-serif;
            font-weight:bold;
            font-size:$font-size-medium;
            color:$blue;
            transition:background 0.12s ease-in-out;
            border-radius:20px;

            &:hover {
                background:$lightgrey;
            }

            &.exact-active-link {
              color: black;
            }
        }
    }

    .footer-logo {
        margin-bottom:-4rem;
    }

    .footer-content {
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        max-width:500px;
        margin:0 auto;

        @media (max-width: $single-column) {
            width: 80%;
            max-width: 80%;
            padding:4rem 0;
        }

        span {
            font-size:$font-size-huge;
            font-weight:bold;
            color:$grey;
            font-family: 'Poppins', sans-serif;
            margin-bottom:4rem;

            @media (max-width: $single-column) {
                font-size:$font-size-large;
            }
        }
    }

    .body {
        font-family: 'Poppins', sans-serif;
        font-size: $font-size-medium;
        color: $grey;
        text-align: center;
        line-height: calc(#{$font-size-medium} * 2);
        font-weight:bold;
    }
}

</style>



