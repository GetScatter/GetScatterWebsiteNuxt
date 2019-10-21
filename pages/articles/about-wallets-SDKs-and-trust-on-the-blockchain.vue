<template>
    <article>
        <img src="@/assets/images/blog/about-wallets-SDKs-and-trust-on-the-blockchain/1_7xDknqWLDZ7w4j2D0JNWAA.png">
        <h2>About Wallets, SDKs, and trust on the blockchain</h2>
        <p>Following the <a href="https://medium.com/getscatter/eos-and-scatter-basics-4224bbed9035" data-href="https://medium.com/getscatter/eos-and-scatter-basics-4224bbed9035" class="markup--anchor markup--p-anchor" target="_blank" rel="noopener">EOS and Scatter basics article we published a few weeks ago</a>, we felt that it was important to continue by giving you a higher level overview of how Scatter&rsquo;s technologies enable powerful modern smart contract systems like EOS, Ethereum, and Tron to<span>&nbsp;</span><a href="https://marketdemo.get-scatter.com/" data-href="https://marketdemo.get-scatter.com/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">create new economies</a><span>&nbsp;</span>and business models.</p>
        <h3>Scatter is many things</h3>
        <p>Before we start, it should be made clear that Scatter is really<span>&nbsp;</span><strong class="markup--strong markup--p-strong">three core technologies</strong><span>&nbsp;</span>that work together to create a cohesive and secure system.</p>
        <ol class="postList">
        <li><strong class="markup--strong markup--li-strong">Scatter Wallet<span>&nbsp;</span></strong>&mdash;this is what a user uses to manage his keys and safely sign transactions.<span>&nbsp;</span><a href="http://get-scatter.com/download" data-href="http://get-scatter.com/download" class="markup--anchor markup--li-anchor" rel="nofollow noopener" target="_blank">It is currently available for Desktop on Windows, Mac, and Linux</a>.<span>&nbsp;</span><a href="https://medium.com/getscatter/weve-been-busy-3b9a78151f7d" data-href="https://medium.com/getscatter/weve-been-busy-3b9a78151f7d" class="markup--anchor markup--li-anchor" target="_blank" rel="noopener">Scatter Mobile is in development</a><span>&nbsp;</span>and will be available this summer. There are currently 15 other wallets that support Scatter protocols.<span>&nbsp;</span><strong class="markup--strong markup--li-strong">If you are using EOS, chances are that you are using Scatter technologies.</strong></li>
        <li><strong class="markup--strong markup--li-strong">Scatter SDKs </strong>&mdash; this is what a software developer uses inside their app so that they can easily connect to smart contracts on the EOS blockchain and to the Scatter Wallet. There are multiple flavors of SDKs:<span>&nbsp;</span><a href="https://github.com/GetScatter/scatter-js" data-href="https://github.com/GetScatter/scatter-js" class="markup--anchor markup--li-anchor" rel="nofollow noopener" target="_blank">Scatter-js</a>,<span>&nbsp;</span><a href="https://github.com/GetScatter/scatter-sharp" data-href="https://github.com/GetScatter/scatter-sharp" class="markup--anchor markup--li-anchor" rel="nofollow noopener" target="_blank">Scatter-sharp</a>, and<span>&nbsp;</span><a href="http://eos-sharp/" data-href="http://eos-sharp" class="markup--anchor markup--li-anchor" rel="nofollow noopener" target="_blank">eos-sharp</a>. The latter two are mainly used in Unity for connecting games to the EOS blockchain.</li>
        <li><strong class="markup--strong markup--li-strong">RIDL </strong>&mdash; the Reputation and Identity Layer which serves as a service that Scatter uses to identify who is trustworthy and who is not. We&rsquo;ll cover RIDL more in a bit.</li>
        </ol>
        <p>Together, these provide a way for apps and users to safely interact with blockchains like EOS, Ethereum, and Tron.</p>
        <p><strong class="markup--strong markup--p-strong">Scatter allows users to trust that the interactions they have on those blockchains are safe.</strong></p>
        <h3>We as a community have to face that we have a big trust&nbsp;problem</h3>
        <p>In 2018, over $1B in blockchain funds were lost to a multitude of different attack types including fraud, exit scams, phishing, and outright theft.</p>
        <p>If we want to make the jump from the around 40M wallets in use today to the next order of magnitude of 400M wallets we need to address this trust problem.</p>
        <figure>
        
        <img src="@/assets/images/blog/about-wallets-SDKs-and-trust-on-the-blockchain/image_1.png">

        </figure>
        <p>The core issue is really that nobody knows who they are really interacting with when they sign a transaction. It is the wild west and that is scary for users.</p>
        <p><strong>They are right to be scared because traditionally we expect them to know what they are supposed to do in a totally new environment. That is untenable.</strong></p>
        
        <img src="@/assets/images/blog/about-wallets-SDKs-and-trust-on-the-blockchain/image_2.png">

        <p>If we want real adoption it is up to us to tell our fellow users what is safe and what is not.<strong class="markup--strong markup--p-strong"><span>&nbsp;</span>RIDL is a decentralized way to do that.</strong></p>
        <h3>RIDL is what makes Scatter&nbsp;special</h3>
        <p>What really makes Scatter special is the<span>&nbsp;</span><a href="https://ridl.network/" data-href="https://ridl.network/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">RIDL network</a>. It is a reputation and identity layer that Scatter uses to ensure that the party you are interacting with is trustworthy.</p>
        <p>The way that this works is that each entity has a unique score which is registered on the<span>&nbsp;</span><a href="https://ridl.network/" data-href="https://ridl.network/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">RIDL network</a>. Users give entities scores and there is no central authority who controls the narrative. This is decentralization at its finest.</p>
        <p><strong>Some examples of RIDL use-cases are</strong></p>
        <ul class="postList">
        <li>If you&rsquo;ve had a good experience with a game, you can tell everyone that that game is trustworthy.</li>
        <li>If you&rsquo;ve had a bad experience with an exchange, you can make sure that nobody else does.</li>
        <li>If you&rsquo;ve had a great experience working with a freelancer, you can let others know so they can work with them too.</li>
        </ul>
        <h3>We have incentivized the use of RIDL because we know that getting data into the system is our biggest&nbsp;hurdle.</h3>
        <p>Users who are the first to &ldquo;repute&rdquo; an entity become &ldquo;miners&rdquo; of that entity and will earn RIDL tokens in return for their effort. We want you guys to go out there and convert those RIDL tokens you&rsquo;ve been HODLing for the last 8 months into a system that works for your financial benefit and also makes our networks safer at the same time.</p>
         
        <img src="@/assets/images/blog/about-wallets-SDKs-and-trust-on-the-blockchain/image_3.png">

        <h3>Building on top of the Scatter&nbsp;system</h3>
        <p>We now have a system where developers can easily connect their applications to blockchain networks,<span>&nbsp;</span><a href="https://medium.com/getscatter/eos-and-scatter-basics-4224bbed9035" data-href="https://medium.com/getscatter/eos-and-scatter-basics-4224bbed9035" class="markup--anchor markup--p-anchor" target="_blank" rel="noopener">users can safely manage their assets</a>, and together we can keep everyone safe with RIDL.</p>

        

    </article>
</template>

<script>
    
    export default {
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

