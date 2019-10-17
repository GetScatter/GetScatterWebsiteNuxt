<template>
    <section>
        <h2>Integrating Scatter into your application</h2>
        <h3>Getting Started</h3>
        <p class="notice">See the sub-links on the side for detailed information about setting your web/desktop/mobile projects up.</p>
        <p>For <b>web applications</b> you can import the ScatterJS library into your project which allows you to interface with Scatter 
            Classic ( extension ), Desktop and mobile all with one library, so that you only have to write code once to be able to interact 
            with all three.</p>
        <p>For <b>desktop and mobile apps</b> you will need to open a local websocket that interacts with Scatter. Though you don't have to use them a few plugins are slowly being made
            available to help facilitate this from certain frameworks such as Unity3d and Unreal Engine 4.</p>

    </section>

</template>

<script>

    export default {
        components: { },
        layout: 'documentation',
        head() {
            return{
                title:"Getting Started with developing using Scatter",
                description:"Developers have many options for how to integrate Scatter into their applications."
            }
        }
    }

</script>

<style lang="scss" rel="stylesheet/scss">

    @import "@/assets/_variables.scss";

</style>
