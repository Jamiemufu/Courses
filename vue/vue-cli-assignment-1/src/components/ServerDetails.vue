<template>
    <div class="col-xs-12 col-sm-6">
            <p>{{ server_details }}</p>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                server_details: 'Server Details are currently not updated'
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>

