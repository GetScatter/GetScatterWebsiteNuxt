<template>
    <nav class="dev-nav-list">
      <section class="block">
        <nuxt-link class="nav-item" to="/developers">Getting Started</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/settingupforwebapps">Setting up for Web Applications</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/settingupfornativeapps">Setting up for Native Applications</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/native/connections">Connections</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/native/promises">Promises</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/native/pairing">Pairing</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/native/sendingrequests">Sending Requests</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/native/catchingresponses">Catching Responses</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/interactionflow">Example interaction flow</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/supportedblockchains">Supported Blockchains</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/networks">Networks</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/requirablefields">Requirable Fields</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/identities">Identities</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/signatureproviders">Signature Providers</nuxt-link>
      </section>
      <section class="block">
        <nuxt-link class="nav-item" to="/developers/api">API Reference</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/linkaccount">Login / Get Identity</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/identityfrompermissions">Identity From Permissions</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/authenticate">Authenticate</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/suggestnetwork">Suggest Network</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/getpublickey">Get Public Key</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/linkaccount">Link Account</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/createtransaction">Create Transaction</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/requestsignature">Request Signature</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/requestarbitrarysignature">Request Arbitrary Signature</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/requesttransfer">Request Transfer</nuxt-link>
        <nuxt-link class="nav-item sub" to="/developers/api/getversion">Get Version</nuxt-link>
      </section>
      <section class="block"></section>
    </nav>

</template>

<script>

    export default {
        data() {
            return {
              
            }
        }
    }

</script>

<style lang="scss" scoped>

    @import "@/assets/_variables.scss";

    .dev-nav-list {
        display:flex;
        flex-direction:column;
        width:300px;
        padding:3rem 0 0 4rem;
        align-items:flex-start;
        height:calc(100vh - 80px);
        background:lighten($blue,47%);
        overflow:auto;
        border-right:1px solid lighten($blue,36%);

        .block {
          border-bottom:1px solid lighten($blue,36%);
          display:flex;
          flex-direction:column;
          width:100%;
          padding:1rem 0;
          margin: 0 0 1rem;

        }

        &:last-child {
          margin-bottom:4rem;
        }

        @media (max-width: $breakpoint-tablet) {
          height:54px;
        }

        .nav-item {
            margin: 0 0 1rem 0;
            text-decoration:none;
            font-family: 'Poppins', sans-serif;
            font-weight:bold;
            font-size:$font-size-standard;
            color:$blue;

            &.sub {
              margin: 0 0 0 0rem;

              &:before {
                content: "\2022";  
                color: $blue; 
                font-weight: bold; 
                font-size:$font-size-medium;
                display: inline-block; 
                width: 1em; 
              }
            }

            @media (max-width: $breakpoint-tablet) {
              margin: 0 1rem;
              font-size:$font-size-standard;
            }

            &.exact-active-link {
              color: black;
            }
        }
    }
    

</style>