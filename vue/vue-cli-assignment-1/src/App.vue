<template>
    <div class="container"> 
        <!-- component -->
        <app-header></app-header>
        <hr>
        <div class="row">
            <!-- component -->
            <servers></servers>
            <!-- component -->
            <server-details></server-details>

        </div>
        <hr>
        <!-- component -->
        <app-footer></app-footer>   
    </div>
</template>

<script>
    // import compnents
    import Header from "./components/Header.vue"
    import Servers from "./components/Servers.vue"
    import ServerDetails from "./components/ServerDetails.vue"
    import Footer from "./components/Footer.vue"

    export default {
        components: {
            'app-header':Header,
            'servers': Servers,
            'server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>


<style>
</style>
