<template>
  <section class="doc-page">

    <h2>Getting the version of the client's Scatter</h2>

    <section class="switcher">
      <section class="switch" v-for="lang in languages" :class="{'active':language === lang}" @click="language = lang">{{lang}}</section>
    </section>

    <p>
      This API route just fetches the version of Scatter the user is using.
    </p>

    <section class="code-block">
<pre v-show="language === languages.WEB" v-highlightjs><code class="javascript">scatter.getVersion()</code></pre>
      <pre v-show="language === languages.JSON" v-highlightjs><code class="javascript">{
    id:'random-uid',
    type:'getVersion',
    plugin:'Your App Name',
    payload:{
        origin:'domain' || 'YOUR_APP',
    }
}</code></pre>
    </section>



  </section>
</template>

<script>


  export default {
    data(){ return {

    }},
    layout: 'documentation',
    head() {
        return{
            title:"Getting the version of the client's Scatter",
            description:""
        }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">


</style>
