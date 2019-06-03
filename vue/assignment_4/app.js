new Vue({
    el: '#exercise',
    data: {
        // object of classes and conditions
        effects: {
            highlight: false,
            shrink: true
        },
        progressBar: {
            width: '0px',
            background: 'green'
        },
        //class name as prop
        bold: 'bold',
        userClass: '',
        isHidden: true,
        secondClass: '',
        userStyles: '',
        
    },
    methods: {
        startEffect: function () {
            // accessable var declaration
            var vm = this
            setInterval(function () {
                // set to opposite
                vm.effects.highlight = !vm.effects.highlight
                vm.effects.shrink = !vm.effects.shrink
            }, 2000)
        },
        progress: function() {
            //accessable variable
            var vm = this
            var width = 0
            setInterval(function() {
                width = width + 10
                //add 10px every 1/2second
                vm.progressBar.width = width + 'px'
            }, 500)
        }
    }
})
