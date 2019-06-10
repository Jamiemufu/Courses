<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
            :key="server"
            v-for="server in servers"
            :server="server"
            ></app-server>
        </ul>
    </div>
</template>

<script>

    import { serverBus } from "../../main"
    import appServer from './Server.vue'

    export default {
        data() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Offline'},
                    {id: 3, status: 'Critical'},
                    {id: 4, status: 'Overloaded'},
                    {id: 5, status: 'Normal'},
                ]
            }
        },
        components: {
            'app-server': appServer
        }
    }

</script>

<style>
    
</style>
