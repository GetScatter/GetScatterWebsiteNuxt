<template>
    <div id="founders">

        <section class="body">
            <div class="body-text">
                <div class="row">
                    <div class="single-column">
                        <h2>{{ $t('founders.title') }}</h2>
                        <h4>{{ $t('founders.introduction') }}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <img src="../assets/gs_founders_nathan.jpg">
                        <h4>Nathan S. James</h4>
                        <p class="position">{{ $t('founders.nathan.position') }}</p>
                        <p>{{ $t('founders.nathan.description') }}</p>
                        <p><a class="" href="mailto:nsjames@get-scatter.com">nsjames@get-scatter.com</a><br>
                            <a class="" href="https://t.me/Randomnobody">Telegram</a></p>
                    </div>
                    <div class="col-3">
                        <img src="../assets/gs_founders_rami.jpg">
                        <h4>Rami S. James</h4>
                        <p class="position">{{ $t('founders.rami.position') }}</p>
                        <p>{{ $t('founders.rami.description') }}</p>
                        <p><a class="" href="mailto:rami@get-scatter.com">rami@get-scatter.com</a><br>
                            <a class="" href="https://t.me/Farfaraway">Telegram</a></p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'Founders',
        head () {
          return {
            title: 'Team Scatter',
            meta: [
              { 
                hid: 'description', 
                name: 'description', 
                content: 'The team at Scatter is Nathan S. James and Amiram S. James, two brothers with a passion for software development on the cutting edge.'
              }
            ]
          }
        }
    }

</script>
<style lang="scss">




</style>