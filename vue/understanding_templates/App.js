//first App in course
new Vue({
    el: '#app-1',
    data: {
      title: 'Hello World!',
      link: 'http://google.com',
      finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello!';
            return this.title;
        }
    }
});

//second app
new Vue({
    el: '#app-2',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(num, event) {
            this.counter+= num;
        },
        // pass in event (created default)
        updateCoords: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert('Alert!');
        }
    }
})

//third app
new Vue({
    el: '#app-3',
    data: {
        name: 'Jamie'
    },
    methods: {

    }
})

// fourth app
new Vue({
    el: '#app-4',
    data: {
        counter: 0,
        secondCounter: 0
    },
    // execute function only when needed
    computed: {
        output: function() {
            console.log('Computed');
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    },
    //update on change
    watch: {
        counter: function(value) {
            //store as variable for callback
            var vm = this;
            //reset after 2 seconds
            setTimeout(function() {
                vm.counter = 0;
            }, 2000)
        }
    },
    //excute everytime
    methods: {
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    }
})

// fifth app
new Vue({
    el: '#app-5',
    data: {
        link: 'http://google.com'
    },
    methods: {
        changeLink: function() {
            this.link = 'http://apple.com'
        }
    }
})