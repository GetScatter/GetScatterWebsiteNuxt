<template>
    <nav class="dev-nav-list" role="navigation" :class="{'open':toggleDevLinks}">
      <div class="mobile-button" role="button" v-on:click="$store.dispatch('nav/toggleDevLinks')">
        <svg width="18px" height="14px" viewBox="0 0 18 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M0,1 L18,1" id="Path-3" stroke="#000"></path>
                <path d="M0,7 L18,7" id="Path-3" stroke="#000"></path>
                <path d="M0,13 L18,13" id="Path-3" stroke="#000"></path>
            </g>
        </svg>
      </div>
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
        <nuxt-link class="nav-item sub" to="/developers/api/getidentity">Login / Get Identity</nuxt-link>
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

    import { nav } from '@/store/nav'

    export default {
        data() {
            return {

            }
        },
        computed: {
            toggleDevLinks() {
                return this.$store.getters['nav/toggleDevLinks']
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
        position:relative;

        .mobile-button {
          display:none;
          position:absolute;
          right:1.66rem;
          top:1.66rem;
        }

        .block {
          border-bottom:1px solid lighten($blue,36%);
          display:flex;
          flex-direction:column;
          width:100%;
          padding:1rem 0;
          margin: 0 0 1rem;

          @media screen and (max-width: $breakpoint-tablet) {
            border-bottom:0px solid lighten($blue,36%);
            padding:0;
            margin: 0;
            width:auto;
          }

        }

        .nav-item {
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
              font-size:$font-size-standard;
            }

            &.exact-active-link {
              color: black;
            }
        }

        @media screen and (max-width: $breakpoint-tablet) {

          padding:1.666rem;
          height:60px;

          .mobile-button {
            display:block;
          }
          
          a:not(.exact-active-link), .dropdown .dropbtn {
            display: none;
          }

          &.open {
            height:calc(100vh - 60px);
            overflow-y:auto;

            a:not(.exact-active-link), .dropdown .dropbtn {
              display: block;
            }

            .block {
              border-bottom:1px solid lighten($blue,36%);
              display:flex;
              flex-direction:column;
              width:100%;
              padding:1rem 0 2rem;
              margin: 0 0 1rem;

            }

          }

        }

        @media (max-width: $breakpoint-tablet) {
            width:100%;
        }

        

        &:last-child {
          margin-bottom:4rem;
        }

        @media (max-width: $breakpoint-tablet) {
          height:54px;
        }

        
    }
    

</style>