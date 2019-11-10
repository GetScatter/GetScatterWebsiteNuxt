<template>
    <article>
        <img src="@/assets/images/blog/scatter-embed-one-codebase-many-wallets/embed.png">
        <h2>Scatter Embed - one codebase, many wallets</h2>
        <p>Scatter is almost three years old, and we&rsquo;ve learned a lot during that time. One of the most crucial things we&rsquo;ve had to come to terms with is that we are a tiny team, and the world is big.&nbsp;</p>
        <p>Our capacity to maintain many projects at once (Scatter Desktop, Extension, Mobile, etc.) is limited. This has caused the wait for new releases and products to grow as we try to expand our horizons and build ever more complex products. Even when new releases roll out that have critical things like auto-rejecting <strong>updateauth</strong>, users are slow to update and that leaves them vulnerable.</p>
        <p><a href="https://get-scatter.com/blog/scatter-releases-a-block-producer-candidate">With the release of our new BP</a> <strong></strong> we are looking for ways to streamline and improve our product build cycles.</p>
        <p><strong><a href="https://get-scatter.com/vote" class="button">Vote for our BP and help fund Scatter's development!</a></strong><strong></strong></p>
        <p>To this end, we&rsquo;ve been working on a new project called <b>Scatter Embed</b>. Its core purpose is to offload the entire Scatter user-interface (UI) into a web app which can have a wallet key/signature provider injected into it. The end effect here is that we can have one codebase which renders the pretty graphics, and then many tiny products which interact with it that provide the security our users require.</p>
        <p>Let&rsquo;s take Scatter Desktop as an example. Right now all of the code that powers the graphics lives within the desktop wallet that you download. It makes the download size larger, and any time we have to fix a bug users have to download a new version and install it, even though 99% of the time bugs aren&rsquo;t related to keys or signing, which is the only thing the desktop app actually needs to be used for.</p>
        <p>By embedding <b>Scatter Embed</b> into the desktop app, and injecting it with the signing and encryption capabilities of Scatter Desktop, we get the exact same protections, without the downsides of having a full desktop app. </p>
        <h2>We&rsquo;re bringing the extension back</h2>
        <p>Because of these core changes, we are now also bringing back the Scatter Extension. That&rsquo;s right, Chromebook users can rejoice!</p>
        <p>In the same way that desktop now works, the extension will simply be a key store and signing tool for the embedded web app. You can think of it like MyEtherWallet on steroids (lots of steroids).</p>
        <p>By having Scatter Desktop, Mobile, and Extension all share the same UI code, we can make bug-fixes and feature updates to all of our wallets at the same time. This also expands the ability to locate and identify bugs by having all of our wallet&rsquo;s users using the same code across all of their devices. Submitting error reports can now happen in a more organized manner, which will help keep the quality of Scatter high.</p>
        <h2>Speaking of updates</h2>
        <p>One of the biggest bonuses of this separation of code bases is that the need to update all of Scatter Desktop, Extension, or the upcoming Mobile can be done with a lighter touch.</p>
        <p>Right now both changes to the UI and wallet-specific functionality all require a full update. This is problematic as many users are still using old versions of Scatter with some vulnerabilities which have since been fixed. Here is your reminder to update now!</p>
        <p>By splitting the Embed wallet and the Desktop wallet into two interacting softwares we can auto-update the Embed wallet without you having to download and install a new version of Scatter. So for things like UI updates, wallet logic (things like preparing transfers and actions), and mutating already decrypted data (settings, adding/removing keys, etc.) you simply automatically update to the latest code.&nbsp;</p>
        <p>The Desktop, Extension, and Mobile clients will need an update when things like signing, encrypting, or data storage need bugfixes, or when a new blockchain is added. This will require the user to download a new version of the native client.&nbsp;</p>
        <h2>Is it still just as secure?</h2>
        <p>All Scatter versions will be considered more secure now because fixes will migrate to users faster. Not only are there checksum checks of the web app from your local app, but all encryption and decryption of private keys, as well as signing always happens in your downloaded version and never on the web app--which is still local for you! Unlike other web wallets, we also control both sides of the codebase so we don&rsquo;t have to worry about the web app being updated by a third party team. As always, Scatter means security you can trust.</p>
        <h2>When is this happening?</h2>
        <p>The first product to include <b>Embed</b> will be Scatter Desktop, which will go out to our testing group in the next few weeks. Soon after that the extension will be brought back online and go through testing as well before being released back into production. <br /></p>
        <p>We&rsquo;ll also be announcing a related and super exciting new product in the coming weeks. If you&rsquo;d like to be notified, <a href="https://mailchi.mp/get-scatter.com/scatterbridge">you can sign up for the related mailing list here</a>.<a href="https://t.me/ScatterTesters"></a></p>
        <p><a href="https://t.me/ScatterTesters" class="button">Join our testing group</a></p>
    </article>
</template>

<script>
    
    export default {
        data(){ return {

        }},
        mounted(){

        },
        layout: 'articles',
        head() {
            return{
                title:"An adhoc poll about keeping your EOS tokens on exchanges",
                description:"It's important to be objective in our opinions on how complex systems work. We ran an adhoc poll to learn a bit more about how our users store their digital assets."
            }
        },
    }

</script>

