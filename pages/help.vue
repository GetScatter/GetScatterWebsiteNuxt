<template>
	<section class="help body">

		<section class="body-text" data-aos="fade-up" >
			<section class="row">
				<section class="single-column">
					<img src="../assets/help.png" class="loveme">
					<h1 class="centered">{{ $t('help.title') }}</h1>
					<h4 class="centered">
						{{ $t('help.tagline') }}
					</h4>

					<section class="help-row">
						<section class="help-option">
							<h2>{{ $t('help.donate.title') }}</h2>
							<p>{{ $t('help.donate.text') }}</p>

							<div v-if="loggedin">
								<div class="button button-primary" @click="donate()">{{ $t('help.donatebutton').replace('10', this.amount) }}</div>
								<div class="button button-text" @click="logout()">{{ $t('help.logout') }}</div>
							</div>

							<div v-else class="button button-primary" @click="login()">{{ $t('help.donate.loginbutton') }}</div>

						</section>

						<section class="help-option">
							<h2>{{ $t('help.build.title') }}</h2>
							<p>{{ $t('help.build.text') }}</p>
						</section>
					</section>

					<hr>

					<section class="help-row">
						<section class="full-row">
							<nuxt-link :to="localePath('vote')">
				                <img src="../assets/bp_candidate.png">
				            </nuxt-link>
							<h2>{{ $t('help.vote.title') }}</h2>
							<p>{{ $t('help.vote.text') }}</p>
							<nuxt-link :to="localePath('vote')" class="button button-primary">
								{{ $t('help.vote.button') }}
							</nuxt-link>
						</section>
					</section>

				</section>

			</section>
		</section>

	</section>
</template>

<script>

	import {mapActions, mapState} from "vuex";
	import ScatterJS from '@scatterjs/core';
	import ScatterEOS from '@scatterjs/eosjs2';
	import {JsonRpc, Api} from 'eosjs';

	ScatterJS.plugins(new ScatterEOS());

	const network = ScatterJS.Network.fromJson({
		blockchain:'eos',
		chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
		host:'nodes.get-scatter.com',
		port:443,
		protocol:'https'
	});

	const rpc = new JsonRpc(network.fullhost());

	export default {
		data(){return {
			donated: null,
			loggedin: null,
			scatter:null,
			error:null,
      amount:1,
		}},
		head () {
          return {
            title: 'Help make the Scatter project grow',
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: 'Scatter is a community project. If you would like to help make Scatter better, there are many options.'
              }
            ]
          }
        },
		computed:{
			identity(){
				if(!this.scatter) return;
				return this.scatter.identity;
			},
			account(){
				if(!this.identity) return;
				return this.scatter.identity.accounts[0];
			}
		},
		methods:{
			async login(){
				const connected = await new Promise(resolve => {
					ScatterJS.connect('ScatterWebsite', {network}).then(async _connected => {
						if(!_connected) return resolve(false);
						this.scatter = ScatterJS;
						resolve(true);
					})
				})

				if(connected){
					await this.scatter.logout().catch(() => null);
					await this.scatter.login().catch(() => null);
				}

				if(!this.account) {
					this.error = 'You must log in first.';
					return this.loggedin = false;
				} else {
					return this.loggedin = true;
				}

			},
			async donate(){
        this.donated = false;

				const eos = ScatterJS.eos(network, Api, {rpc});

        const success = await eos.transact({
          actions: [
            {
              account: "eosio.token",
              name: "transfer",
              authorization: [{
                actor: this.account.name,
                permission: this.account.authority
              }
              ],
              data: {
                from: this.account.name,
                to: "scatterfunds",
                quantity: `${parseFloat(this.amount).toFixed(4)} EOS`,
                memo: ""
              }
            }]
        }, {
          blocksBehind: 3,
          expireSeconds: 30,
        }).then(x => x.hasOwnProperty('transaction_id')).catch(() => false);

        if(success) {
          this.donated = true;
          this.logout();
          alert('Donated!')
        }
			},
			async logout(){
				ScatterJS.forgetIdentity();
				return this.loggedin = false;
			}
		},
	}
</script>

<style lang="scss">

	@import "@/assets/_variables.scss";

	.help {

		.loveme {
			max-width:288px;
			margin:0 auto 4rem;
			display:block;
		}

		h3 {
			margin-top:50px;
		}

		h5 {
			margin:0;
			margin-bottom:30px;
		}

		.help-row {
			display:flex;
			flex-direction:row;

			.help-option {
				width:50%;
				padding:2rem;
			}

			.full-row {
				padding:2rem;
				text-align:center;
			}
		}



	}


</style>



