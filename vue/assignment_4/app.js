new Vue({
    el: '#exercise',
    data: {
        // object of classes and conditions
        effects: {
            highlight: false,
            shrink: true
        },
        //class name as prop
        bold: 'bold',
        userClass: ''
    },
    methods: {
        startEffect: function () {
            // accessable var declaration
            var vm = this
            setInterval(function () {
                // set to opposite
                vm.effects.highlight = !vm.effects.highlight
                vm.effects.shrink = !vm.effects.shrink
            }, 2000);
        }
    }
})
