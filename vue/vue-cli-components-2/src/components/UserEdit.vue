<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Name: {{ userName }}</p>
        <input type="text" v-model="userName" @keydown.enter="editName">
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    
    export default {
        props: ['userAge', 'userName'],
        methods: {
            editAge() {
                this.userAge = 30
                // pass back to parent component
                this.$emit('ageWasEdited', this.userAge)
            },
            editName() {                            
                this.$emit('nameWasEdited', this.userName)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
