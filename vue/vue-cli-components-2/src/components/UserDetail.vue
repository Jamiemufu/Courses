<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        // needs to match data passed from parent
        // props is array for all properties passed from parent
        //proper can be object for type checking
        props: {
            name: {
                // can be type object/array/boolean/number
                type: String,
                // can set required
                // required: true,
                default: 'Your Name'
            },
            userAge: Number
        },
        // example of using props
        methods: {
            reverseName() {
                return this.name.split("").reverse().join("")
            },
            resetName() {
                // emit event back to parent component
                // first - name of event - second - data passed
                // doesnt need this as not calling as function
                this.name = 'Jamie'
                this.$emit('nameReset', this.name)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
