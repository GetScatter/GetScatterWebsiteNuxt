<template>
    <article>
        <img src="@/assets/images/blog/about-keys-keypairs-and-accounts/image_1.png">
        <h2>About Wallets, SDKs, and trust on the blockchain</h2>




        <h3 name="a51e" id="a51e" class="graf graf--h3 graf-after--h3">EOS and Scatter&nbsp;basics</h3>
        <p name="90ce" id="90ce" class="graf graf--p graf-after--h3">Part 1</p>
        <p name="0299" id="0299" class="graf graf--p graf-after--p">This article is about the basics of how EOS works, what a private key is, and how EOS accounts and private keys are related. If you already know that,<span>&nbsp;</span><a href="https://get-scatter.com/Apps" data-href="https://get-scatter.com/Apps" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">go check out some of the apps you can play with</a>.</p>
        <p name="72bc" id="72bc" class="graf graf--p graf-after--p">If all this is new to you, you&rsquo;ll need to understand it so that you can get your EOS account up and running, and really safely manage your assets.</p>
        <p name="a67e" id="a67e" class="graf graf--p graf-after--p">Let&rsquo;s get started.</p>
        <h3 name="bd9b" id="bd9b" class="graf graf--h3 graf-after--p">How EOS works and Scatter&rsquo;s place in&nbsp;it</h3>
        <p name="08af" id="08af" class="graf graf--p graf-after--h3">EOSIO is a blockchain, which is just a tower of building blocks. It is run entirely by users and some of those users choose to run for elected positions (Block Producers or BPs for short) which allows them to add new blocks to the top of the tower in return for pay. However only 21 of the elected BPs are able to add new blocks to the tower and everyone below them with less votes becomes a &ldquo;stand-by&rdquo;. Every user on the network can vote on who should be the elected producers.</p>
        <p name="f2f8" id="f2f8" class="graf graf--p graf-after--p">The top 21 block producers shift around a bit but are largely stable.</p>
        <p name="7f94" id="7f94" class="graf graf--p graf-after--p">The protocol itself gets updated from time to time and a cool feature of the network is that they can all vote and update the network together when there is a consensus of 15 out of 21 block producers.</p>
        <p name="1987" id="1987" class="graf graf--p graf-after--p">EOS Mainnet is one of the networks that runs the protocol and has block producers synced up and producing blocks together. We have built a decentralized computer network that people have accounts on with funds in them. Billions of dollars sit in the network. It is mind-blowing to be a tiny part of that.</p>
        
        <img src="@/assets/images/blog/about-keys-keypairs-and-accounts/image_2.png">

        <p name="5bb0" id="5bb0" class="graf graf--p graf-after--figure"><a href="https://get-scatter.com/" data-href="https://get-scatter.com/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Scatter</a><span>&nbsp;</span>is the beast that Nathan, my brother, and I build that allows users and developers to easily connect to any EOSIO network. Before I explain what Scatter does, we&rsquo;ll have to dive into private keys and permissions.</p>
        <h3 name="10b8" id="10b8" class="graf graf--h3 graf-after--p">Keep it secret, keep it&nbsp;safe</h3>
        <p name="bb04" id="bb04" class="graf graf--p graf-after--h3">So what is different about EOS than other smart contract networks like Ethereum and Tron is that users have actual accounts on the network and not just addresses. To access those accounts, you have to have private keys associated with an account permission. Account permissions give you access to network functions, such as transfer, which is used to move funds around the network.</p>
        
        <h4 name="2c30" id="2c30" class="graf graf--h4 graf-after--p">Explanation of EOS Accounts</h4>
        
        <img src="@/assets/images/blog/about-keys-keypairs-and-accounts/image_3.png">

        <p name="9c0e" id="9c0e" class="graf graf--p graf-after--figure">Private keys give you access to a permission. Scatter never gives anyone your private key; instead it simply provides a proof that you own it via a signature.</p>
        <p name="5f31" id="5f31" class="graf graf--p graf-after--p">Most of the &ldquo;daily driver&rdquo; functions that you&rsquo;d want to do with your account, stuff that is &ldquo;safe&rdquo; is all in the ACTIVE permission. Exposing the ACTIVE permission&rsquo;s associated private key isn&rsquo;t an &ldquo;end of the world&rdquo; scenario as you can not lose your account this way. The OWNER permission houses the functionality that you could possibly lose your account with, like updateauth which swaps one set of private keys for another.</p>
        <p name="951a" id="951a" class="graf graf--p graf-after--p">You can use the same private key to manage both permissions, but that is bad practice. In general we recommend that you hold two sets of private keys, one for each permission. Keep the ACTIVE permission key in Scatter and use that for everything you can. Keep the OWNER permission key somewhere safe. I like to put it on a couple of encrypted USB sticks and hide that somewhere safe physically, like a lock-box in a bank. This way no matter what happens there is no way to lose your account, which could potentially hold millions of dollars. Worst case scenario you get your OWNER permission&rsquo;s private key and use that to update the private key for your ACTIVE permission and you have access again. Another great way to secure yourself is purchasing a hardware wallet like a Ledger.</p>
        <p name="b2fb" id="b2fb" class="graf graf--p graf-after--p">If your OWNER permission&rsquo;s private key is exposed, you lose access permanently to your EOS account and its funds. There is no way back from this scenario.</p>

        <img src="@/assets/images/blog/about-keys-keypairs-and-accounts/image_4.png">

        <p name="8ac7" id="8ac7" class="graf graf--p graf-after--figure">From a private key you can derive a public key. A public key can be used to search for an associated account. Since private keys prove ownership, public keys are linked to the accounts and when you sign something on the blockchain the signature is validated against the public key that is associated with your account. If a signature is incorrect (signed by a wrong private key) it will not be able to be added to the blockchain.</p>
        <p name="f416" id="f416" class="graf graf--p graf-after--p">To search for things like accounts, keys, and transaction IDs you can use a block explorer like<span>&nbsp;</span><a href="https://bloks.io/" data-href="https://bloks.io/" class="markup--anchor markup--p-anchor" rel="noopener nofollow" target="_blank">bloks.io</a><span>&nbsp;</span>or<span>&nbsp;</span><a href="https://eospark.com/" data-href="https://eospark.com/" class="markup--anchor markup--p-anchor" rel="noopener nofollow" target="_blank">EOSpark</a>.</p>
        <p name="6538" id="6538" class="graf graf--p graf-after--p">Scatter lets you hold your private keys securely. It warns you if actions you are going to do are potentially dangerous. It allows you to generate and manage the private keys which are associated with your accounts.</p>
        <p name="d137" id="d137" class="graf graf--p graf-after--p">Scatter keeps you safe.</p>

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

