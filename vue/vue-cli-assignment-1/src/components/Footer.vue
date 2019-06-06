<template>
    <div class="row">
        <div class="col-xs-12">
            <footer>
                <p>{{ footer_info }}</p>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                footer_info: 'All Servers are managed here'
            }
        }
    }
</script>
