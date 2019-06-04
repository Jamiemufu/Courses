// first app
new Vue({
    el: '#app-1',
    data: {
        show: true
    }
})

// second app
new Vue({
    el:'#app-2',
    data: {
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            {name: 'Jamie', age: 31, color: 'purple'},
            {name: 'Kevin', age: 99, color: 'black'}
        ]
    }
})