<template>
    <div id="wallets">

        <section class="body">
            <div class="body-text">
                <div class="row">
                    <div class="single-column">
                        <h2>{{ $t('partners.title') }}</h2>
                        <h4>{{ $t('partners.introduction') }}</h4>
                        <a class="button button-primary" href="mailto:business@get-scatter.com">{{ $t('partners.button') }}</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <table>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/mathwallet.png" alt="Math Wallet" class="partner" /></div></td>
                                <td>Math Wallet</td>
                                <td><a class="button button-default" href="https://www.mathwallet.org/en/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/sqrl.png" alt="Sqrl" class="partner" /></div></td>
                                <td>SQRL</td>
                                <td><a class="button button-default" href="https://telosfoundation.io/downloads">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/meetone.png" alt="MEET.ONE" class="partner" /></div></td>
                                <td>MEET.ONE</td>
                                <td><a class="button button-default" href="https://meet.one/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/lynx.png" alt="EOS Lynx" class="partner" /></div></td>
                                <td>Lynx</td>
                                <td><a class="button button-default" href="https://eoslynx.com/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/pocketeos.png" alt="PocketEOS" class="partner" /></div></td>
                                <td>PocketEOS</td>
                                <td><a class="button button-default" href="http://pocketeos.com/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/tokenpocket.png" alt="TokenPocket" class="partner" /></div></td>
                                <td>TokenPocket</td>
                                <td><a class="button button-default" href="https://www.tokenpocket.pro/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/bitpie.png" alt="More" class="partner" /></div></td>
                                <td>BitPie</td>
                                <td><a class="button button-default" href="https://bitpie.com/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/nova.png" alt="NOVA" class="partner" /></div></td>
                                <td>NOVA</td>
                                <td><a class="button button-default" href="https://eosnova.io/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/imtoken.png" alt="imToken" class="partner" /></div></td>
                                <td>imToken</td>
                                <td><a class="button button-default" href="https://www.mathwallet.org/en/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/more.png" alt="More" class="partner" /></div></td>
                                <td>More</td>
                                <td><a class="button button-default" href="https://www.mathwallet.org/en/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/bitkeep.png" alt="Bitkeep" class="partner" /></div></td>
                                <td>BitKeep</td>
                                <td><a class="button button-default" href="https://www.mathwallet.org/en/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                            <tr>
                                <td><div class="image-wrap"><img src="../assets/buckwallet.png" alt="Buckwallet" class="partner" /></div></td>
                                <td>Buckwallet</td>
                                <td><a class="button button-default" href="https://www.mathwallet.org/en/">{{ $t('partners.learnmore') }}</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'Partners',
        head () {
          return {
            title: 'Partner wallets who use Scatter protocols',
            meta: [
              { 
                hid: 'description', 
                name: 'description', 
                content: 'Scatter, an open-source blockchain wallet and library system allows developers and users to easily connect to many wallets.'
              }
            ]
          }
        }
    }

</script>
<style lang="scss">

@import "@/assets/_variables.scss";

#wallets {
    table {
        width:100%;
        text-align:left;

        td {
            padding:20px;
            border-bottom:1px solid $lightgrey;
        }

        td:nth-child(1) {
            width:140px;
            text-align:center;

            .image-wrap {
                background:$blue;
                width:180px;
                height:180px;
                border-radius:50%;
                display:flex;
                align-items:center;

                img {
                    margin:0 auto;
                    width:60%;
                    height:auto;
                }
            }
        }

        td:nth-child(3) {
            width:auto;
            text-align:right;
        }
    }
}


</style>