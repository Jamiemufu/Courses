var faker = require('faker');

    for (var i = 1; i <= 10; i ++) {
        console.log(i + ": " + faker.commerce.product() + " - " + "£" + faker.commerce.price());
    }
