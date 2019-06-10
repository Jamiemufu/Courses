<template>
    <li class="list-group-item"
        @click="setServer"
    >
        <p>Server #{{ server.id }} - {{ server.status }}</p>
    </li>    
</template>

<script>

    import { serverBus } from "../../main"
    
    export default {
        props: 
            ['server'],
        methods: {
            setServer() {                
                serverBus.$emit('setServer', this.server)
            }
        }
    }
</script>

<style>

</style>


