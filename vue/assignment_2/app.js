new Vue({
        el: '#exercise',
        data: {
            value: 'ts'
        },
        methods: {
            myAlert: function(event) {
                alert('Alert');
            },
            saveValue: function(event) {
                this.value = event.target.value
            }
        },
    });