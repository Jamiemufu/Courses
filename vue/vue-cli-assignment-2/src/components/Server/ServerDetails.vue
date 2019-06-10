<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server">
            <p>Server ID: {{ server.id }}</p>
            <p>Server Status: {{ server.status }}</p>   
            <button @click="setNormal">Set to Normal</button>        
        </div>
        <div v-else>
            <p>Please click on a server to see the status</p>
        </div>
        <div>
            
        </div>
    </div>

</template>

<script>

    import { serverBus } from "../../main"

    export default {
        data() {
            return {
               server: null
            }
        },
        created() {
            serverBus.$on('setServer', (server) => {
                this.server = server
            })
        },
        methods: {
            setNormal() {
                this.server.status = "Normal"
            }
        }
    }

</script>

<style>

</style>
