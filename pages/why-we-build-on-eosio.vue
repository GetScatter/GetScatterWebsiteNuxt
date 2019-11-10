<template>
    <article>
        <img src="@/assets/images/blog/why-we-build-on-EOSIO/choose.png">
        <h2>{{ $t('whywebuildoneosio.title') }}</h2>
        <p>{{ $t('whywebuildoneosio.p1') }}</p>
        <img src="@/assets/images/blog/why-we-build-on-EOSIO/image_1.png">
        <h2>{{ $t('whywebuildoneosio.h1') }}</h2>
        <p>{{ $t('whywebuildoneosio.p2') }}</p>
        <p>{{ $t('whywebuildoneosio.p3') }}</p>
        <h3>{{ $t('whywebuildoneosio.h2') }}</h3>
        <p>{{ $t('whywebuildoneosio.p4') }}</p>
        <img src="@/assets/images/blog/why-we-build-on-EOSIO/image_2.png">
        <h3>{{ $t('whywebuildoneosio.h3') }}</h3>
        <p>{{ $t('whywebuildoneosio.p5') }}</p>
        <p>{{ $t('whywebuildoneosio.p6') }}</p>
        <img src="@/assets/images/blog/why-we-build-on-EOSIO/image_3.png">
        <p>{{ $t('whywebuildoneosio.p7') }}</p>
        <h3>{{ $t('whywebuildoneosio.h4') }}</h3>
        <p>{{ $t('whywebuildoneosio.p8') }}</p>
        <p v-html="$t('whywebuildoneosio.p9')"></p>
        <p>{{ $t('whywebuildoneosio.p10') }}</p>
        <p v-html="$t('whywebuildoneosio.p11')"></p>
        <p v-html="$t('whywebuildoneosio.p12')"></p>
        <p v-html="$t('whywebuildoneosio.p13')"></p>
        <h4>{{ $t('whywebuildoneosio.h5') }}</h4>
        <ol>
        <li>State of the dapps - <a href="https://www.stateofthedapps.com/stats">https://www.stateofthedapps.com/stats</a></li>
        <li>Bitcoin transaction volume - <a href="https://www.blockchain.com/en/stats">https://www.blockchain.com/en/stats</a></li>
        <li>Blockchain transaction volume and liquidity - <a href="https://blocktivity.info/">https://blocktivity.info/</a></li>
        </ol>
    </article>
</template>

<script>
    
    export default {
        name: 'why-we-build-on-eosio',
        data(){ return {

        }},
        computed:{
          
        },
        mounted(){

        },
        layout: 'articles',
        head() {
            return{
                title:"Why we at Scatter build primarily on EOSIO",
                description:"Ledger technology advances quickly, and Scatter has placed a large bet that EOSIO technology may be one of the top contenders going forward. Let's break down why we think so."
            }
        },
    }

</script>

