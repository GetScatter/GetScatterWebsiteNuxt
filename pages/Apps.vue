<template>
  <div id="apps">
    <section class="body">
      <div class="body-text" data-aos="fade-up">
        <div class="">
          <div>
            
            <tabs
              :tabs="tabs"
              :currentTab="currentTab"
              :wrapper-class="'default-tabs'"
              :tab-class="'default-tabs__item'"
              :tab-active-class="'default-tabs__item_active'"
              :line-class="'default-tabs__active-line'"
              @onClick="handleClick"
            />
            <div class="app-browser-content">
              <div v-if="currentTab === 'explore'">
                <Promoted :apps="Apps"></Promoted>
              </div>
              <!-- <div v-if="currentTab === 'new'">
                <NewApps :apps="Apps"></NewApps>
              </div> -->
              <div v-if="currentTab === 'search'">
                <Search :search-set="Apps" :search-set-title="'Apps'"></Search>
                <Filter></Filter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  import Tabs from 'vue-tabs-with-active-line';
  import Promoted from '@/components/Promoted.vue'
  import Search from '@/components/Search.vue'

  export default {
    head () {
      return {
        title: 'EOS, Ethereum, and Tron Blockchain apps | Scatter',
        meta: [
          { hid: 'description', 
            name: 'description', 
            content: 'EOS, Ethereum, and Tron Blockchain applications which support Scatter through the scatter-js library.'
          }
        ]
      }
    },
    name: 'Apps',
    data () {
      return {
        Apps: [],
        tabs: [
          { title: this.$i18n.t('apps.explore'), value: 'explore' },
          // { title: 'New', value: 'new' },
          { title: this.$i18n.t('apps.search'), value: 'search' }
        ],
    currentTab: 'explore',
      }
    },
    components: {
      Tabs,
      Promoted,
      Search
    },
    computed: {

    },
    mounted() {
      const getAppsFromGithub = () => {
        fetch("https://rawgit.com/GetScatter/ScatterApps/master/apps.json?random="+parseInt(Math.random()*100+1).toString()).then(r => r.json()).then(result => {
          this.Apps = Object.keys(result).reduce((acc, blockchain) => {
            result[blockchain].map(app => {
              acc.push(Object.assign(app, {blockchain}));
            })
            return acc;
          }, []);
          shuffleArray(this.Apps);
        }, error => {
          console.error(error);
        });
      };

      const getAppsFromAPI = () => {
        fetch('https://api.get-scatter.com/v1/apps?flat=true').then(r => r.json()).then(apps => {
          this.Apps = apps;
          shuffleArray(this.Apps);
        }).catch(err => {
          getAppsFromGithub();
          console.error(err);
        })
      };

      getAppsFromAPI();


    },
    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }

</script>

<style lang="scss">

  @import "@/assets/_variables.scss";

  #apps {
    text-align:center;
    min-height:660px;
    background-color:white;

    .app-browser-content {
      padding:3rem 0;
    }

  }

  .header-wrap {
      clear:both;
      border-bottom:1px solid $lightgrey;
      margin-bottom:1.2rem;
      overflow:auto;
      text-align:left;

      h5 {
        margin-top:0;
      }
  }

  .apps-notice {
        text-align:left;
        margin:3rem 0;

        .fal {
            font-size:44px;
            margin:0 0 1.5rem;
            color:$blue;
        }

        &.blue {
            border-color:$blue;

            h5,p {
                color:$black !important;
                display:block;
                width:100%;
            }

            h5 {
                margin:0;
            }

            p {
                margin-top:0.4rem;
                font-size:1.2rem;
            }

            .button {
                border-color:$blue;
                margin-top:2rem;
            }  
        }

        
    }

  .app-info {
    max-width:600px;
    margin:0 auto;
  }

.default-tabs {
  position: relative;
  text-align: center;
  width:100%;
  display:flex;

  @media (max-width: $breakpoint-tablet) {
    text-align:center;
  }

  &__item {
    color: #252729;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    font-family: 'Poppins', sans-serif;
    font-weight:bold;
    font-size:$font-size-big;
    color:$blue;
    width:100%;
    border-bottom:1px solid $lightgrey;
    height:60px;

    &_active,
    &:hover {
      color: black;
      border-bottom:1px solid $blue;
    }
  }

}

.tabs__active-line.default-tabs__active-line {
  display:none;
}

.content {
  margin-top: 30px;
  font-size: 20px;
}

.tool-box {
    a {
        display:block;
        padding:1rem 0;
        text-align:left;
        text-decoration:none;

        .title {
            font-size:16px;
            line-height:24px;
            display:block;
        }
        .desc {
            font-size:14px;
            opacity:0.44;
            display:block;
            color:$black;
        }
    }
}

</style>
