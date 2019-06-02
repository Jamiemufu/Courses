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