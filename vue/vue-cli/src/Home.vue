<template>
    <!-- must be wrapped under one root element -->
    <div>
        <app-server-status v-bind:key="server" v-for="server in 5"></app-server-status>
    </div>
</template>

<script>
    // local components
    import ServerStatus from './ServerStatus.vue'
    export default {
        // components property
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>

