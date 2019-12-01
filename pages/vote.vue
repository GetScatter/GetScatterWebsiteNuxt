<template>
	<section class="vote body">

		<section class="body-text" data-aos="fade-up" >
			<section class="row">
				<section class="single-column">
					<img src="../assets/love.png" class="loveme">
					<h1 class="centered">{{ $t('vote.title') }}</h1>
					<h4 class="centered">
						{{ $t('vote.tagline') }}
					</h4>
					<!-- VOTE BOX -->
					<section class="vote-box">
						<section v-if="error">
							<figure class="error">{{error}}</figure>
							<figure @click="vote" class="button button-large">{{$t('vote.mainbutton.tryagain')}}</figure>
						</section>

						<section v-else-if="!voted">
							<section v-if="!producers">
								<figure @click="vote" class="button button-large" :class="{'disabled':voting}">{{voting ? $t('vote.mainbutton.pleasewait') : $t('vote.mainbutton.voteforus') }}</figure>
								<p style="margin-top:4rem">{{ $t('vote.smalltext')}} </p>
							</section>

							<section class="manual-voting" v-else>
								<h3>
									{{ $t('vote.manual.alreadythirty')}}
								</h3>
								<h5> {{ $t('vote.manual.alreadythirty') }}</h5>


								<section class="producers">
									<figure class="producer" @click="commitVote(producer)" v-for="producer in producers">
										{{producer}}
									</figure>
								</section>
							</section>
						</section>

						<section v-else>
							<h3>{{ $t('vote.thanks.thanks')}} </h3>
							<p>
								{{ $t('vote.thanks.again')}}
							</p>
							<figure @click="vote" class="button button-large">{{ $t('vote.thanks.voteagain')}} </figure>
						</section>
					</section>
					<p>
						{{ $t('vote.information')}}
					</p>
					<figure class="box">
						{{ $t('vote.notice')}}
					</figure>



				</section>

			</section>

			<br>
			<br>

			<section class="row">
				<section class="single-column" style="text-align:center;">
					<h2>{{ $t('vote.contributions.title') }}</h2>
				</section>
			</section>

			<div class="flex-row">
				<div class="half">
					<h3>{{ $t('vote.contributions.desktop.title') }}</h3>
					<p>{{ $t('vote.contributions.desktop.information') }}</p>
				</div>
				<div class="half with-image">
					<img src="../assets/scatter_desktop.png">
				</div>
			</div>

			<div class="flex-row">
				<div class="half with-image">
					<img src="../assets/scatter_extension.jpg">
				</div>
				<div class="half">
					<h3>{{ $t('vote.contributions.extension.title') }}</h3>
					<p>{{ $t('vote.contributions.extension.information') }}</p>
				</div>
			</div>

			<div class="flex-row">
				<div class="half">
					<h3>{{ $t('vote.contributions.ridl.title') }}</h3>
					<p>{{ $t('vote.contributions.ridl.information') }}</p>
				</div>
				<div class="half with-image">
					<img src="../assets/ridl.png">
				</div>
			</div>

			<div class="flex-row">
				<div class="half with-image">
					<img src="../assets/mobile.png">
				</div>
				<div class="half">
					<h3>{{ $t('vote.contributions.mobile.title') }}</h3>
					<p>{{ $t('vote.contributions.mobile.information') }}</p>
				</div>
			</div>

			<section class="single-column">
				<h2>{{ $t('vote.contributions.developmenttooling.title') }}</h2>
				<h4>{{ $t('vote.contributions.developmenttooling.subtitle') }}</h4>
				<nuxt-link to="/products/developmenttools" class="button">{{ $t('vote.contributions.developmenttooling.button') }}</nuxt-link>
				<hr>
				<h3>{{ $t('vote.contributions.dobetter') }}</h3>
				<p>
					{{ $t('vote.contributions.input') }}
					<br>
					{{ $t('vote.contributions.email') }} <a href="mailto:bp.suggestions@get-scatter.com">bp.suggestions@get-scatter.com</a>
				</p>
			</section>
		</section>

		<br>
		<br>
		<br>
		<br>
		<br>
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
			scatter:null,
			producers:null,
			voterInfo:null,

			error:null,
			voting:false,
			voted:false,
		}},
		head () {
          return {
            title: 'Vote for Scatter\'s Block Producer',
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: 'Scatter now provides top-notch infrastructure on EOS Mainnet, and we would appriate your vote! :)'
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
			async vote(){
				if(this.voting) return;
				this.voting = true;
				this.voted = false;
				this.error = false;
				this.producers = null;


				const proxies = [
					`scatterproxy`,
					// `zicenproxxxy`,
					// `lukeeosproxy`,
					// `sonatasystem`,
					// `colintcrypto`,
					// `eosnetworkxx`,
					// `blokspartner`,
					// `investingwad`,
					// `eoswatchdogs`,
					// `theeoswriter`,
					// `mapleleafcap`,
					// `brockpierce1`,
					// `newdexproxy1`,
					// `madeofstarks`,
					// `eeproxy.info`,
					// `detroitproxy`,
				]

				const randomProxy = proxies[Math.floor(Math.random()*proxies.length)];

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
					return this.voting = false;
				}

				const voterInfo = await fetch(`${network.fullhost()}/v1/chain/get_account`, {
					method:"POST",
					body:JSON.stringify({
						"account_name":this.account.name,
					})
				}).then(x => x.json())
				.then(x => x.voter_info)
				.catch(() => false);

				if(voterInfo === false) {
					this.voting = false;
					return this.error = 'Could not get voter info from chain.';
				}

				if(voterInfo === null){
					return this.commitVote(null, randomProxy);
				}

				this.voterInfo = voterInfo;

				const isForProxy = !!voterInfo.proxy;
				if(isForProxy){
					return this.commitVote(null, proxies.includes(voterInfo.proxy) ? voterInfo.proxy : randomProxy);
				}

				if(voterInfo.producers.length >= 30){
					this.producers = voterInfo.producers;
					// Triggers UI change, don't need to return an error.
					return;
				}

				if(voterInfo.producers.length === 0){
					this.commitVote(null, randomProxy);
				}

				this.commitVote();
			},

			async commitVote(replacingProducer = null, randomProxy = null){
				this.producers = null;

				let producers = this.voterInfo ? this.voterInfo.producers : [];
				let proxy = '';

				if(randomProxy){
					producers = [];
					proxy = randomProxy;
				} else {
					producers.push('vote4scatter');
					if(replacingProducer) producers = producers.filter(x => x !== replacingProducer);
					producers.sort();
				}

				const eos = ScatterJS.eos(network, Api, {rpc});

				await eos.transact({
					actions:[{
						account: 'eosio',
						name:'voteproducer',
						authorization: [{
							actor: this.account.name,
							permission: this.account.authority,
						}],
						data:{
							voter: this.account.name,
							proxy,
							producers,
						},
					}]
				}, {
					blocksBehind: 3,
					expireSeconds: 30,
				})
					.then(trx => {
						this.voted = true;
						this.voting = false;
					})
					.catch(res => {

						if(typeof res === 'object' && res.hasOwnProperty('isError') && res.isError){
							this.error = res.message;
						}
						else this.error = res.toString().replace('Error: assertion failure with message: ', '');
						this.voting = false;
						this.voted = true;
					})
			},


			...mapActions([
				'setScatter'
			])
		},
	}
</script>

<style lang="scss">

	@import "@/assets/_variables.scss";

	.vote {

		.loveme {
			max-width:100%;
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

		.box {
			border-radius:4px;
			margin-bottom:20px;
			padding:15px;
			background:lighten($blue, 45%);
			border:1px solid lighten($blue, 35%);
			font-size: 11px;
		}

		.vote-box {
			margin-top:2rem;
			padding:15px;
			text-align:center;

			h1,h2,h3,h4,h5 {
				text-align:center;
				margin-top:0;
			}

			p {
				max-width:600px;
				margin:0 auto;
			}

			.button {
				cursor: pointer;
				max-width:400px;
				width:100%;
				padding: 3rem 3.8rem !important;
				font-size:3rem;

				&.disabled {
					cursor: not-allowed;
				}
			}

			.error {
				background:red;
				color:#fff;
				padding:15px;
				font-weight: bold;
				border-radius:4px;
				margin:0 auto;
				margin-bottom:15px;
				max-width:400px;

			}
		}

		.producers {
			display:flex;
			flex-wrap: wrap;

			.producer {
				width:50%;
				font-size: 22px;
				padding:3px 0;
				cursor: pointer;

				&:hover {
					text-decoration: underline;
					color:red;
				}
			}
		}

		.manual-voting {
			border:1px solid $blue;
			padding:25px;
			border-radius:4px;
		}

		.half {

			img {
				border-radius:6px;
                box-shadow: 0 10px 20px 0 rgba(7,83,123,0.19);
			}

			h3 {
				margin-top:0;
			}
		}

		.flex-row {

			&.thirds {

				a.button {
					display:inline-block;
					width: 50%;
					text-align: center;
					margin: 0 0 2rem 0;
				}

				img {
					margin-bottom:2rem;
					border-radius:6px;
                	box-shadow: 0 10px 20px 0 rgba(7,83,123,0.19);
				}
			}
		}
	}


</style>



