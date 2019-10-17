<template>
  <div id="documentation">
    <DevHeader></DevHeader>
    <section class="documentation-flex">
      <DevLinks></DevLinks>
      <section class="documentation-content">
        <nuxt />
      </section>
    </section>
  </div>
</template>

<script>

  import DevHeader from '~/components/DevHeader'
  import DevLinks from '~/components/DevLinks'
  import Footer from '@/components/Footer.vue'


  export default {
        name: 'Default',
        components: { 
          DevHeader,
          DevLinks,
          Footer
        },
        data(){return {

        }},
        head: {
          bodyAttrs: {
            class: 'noscroll'
          }
        }

    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    @import "@/assets/_variables.scss";

    #documentation {
        display:flex;
        flex-direction:column;
        overflow:hidden;

        .documentation-flex {
          display:flex;
          flex-direction:row;
          align-content:flex-start;

          .documentation-content {
            width:calc(100% - 300px);
            padding:4rem;
            height:calc(100vh - 80px);
            overflow-y:auto;
          }

        }

        .doc-page {
          line-height: 3rem;
        }

        .notice {
          padding:2rem;
          background-color:lighten($blue, 44%);
        }

        .code-snippet {
            padding:1px 5px;
            background:$blue;
            color:white;
            border-radius:3px;
            margin:0 .4rem;

          &.red {
            background:red;
            color:#fff;
          }
        }

        .switcher {

            .switch {
                cursor: pointer;
                background:$very-light-blue;
                border:2px solid rgba(0,0,0,0.1);
                display:inline-block;
                height:40px;
                line-height:37px;
                padding:0 20px;

                &:first-child {
                    border-right:0;
                    border-top-left-radius:4px;
                    border-bottom-left-radius:4px;
                }

                &:last-child {
                    border-left:0;
                    border-top-right-radius:4px;
                    border-bottom-right-radius:4px;
                }

                &:hover {
                    background: transparent;
                }

                &.active {
                    background: transparent;
                }
            }
        }

        .code-block {
            padding:10px 0 50px;
            margin:0 0 80px;
            border-bottom:1px solid rgba(0,0,0,0.05);
            background:lighten($very-light-blue, 6%);
            overflow:auto;

            pre {
                
                padding:20px;
                border-radius:4px;
            }

            code {
                padding:0;
                margin:0;
            }

            .hljs {
                background:transparent;

                .hljs-comment {
                    color:rgba(0,0,0,0.25);
                }
            }
        }
    }

</style>
