<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>        
        <input type="text" v-model="name">
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- pass data from parent -->
                <app-user-detail :name="name" @nameReset="name = $event" :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <!-- emit event listener  @ageWasEdited="age = $event" -->
                <app-user-edit 
                    :userAge="age" 
                    @ageWasEdited="age = $event" 
                    :userName="name" 
                    @nameWasEdited="name = $event"
                    ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: 'Jamie',
                age: 27
            }
        },
        methods: {
            changeName() {
                this.name = 'Evans'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
