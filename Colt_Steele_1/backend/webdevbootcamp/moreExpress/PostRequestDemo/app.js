var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var pets = [
    "Cats",
    "Dogs",
    "Birds",
    "Fish"
];

//tell express to use body document -- copy paste job
app.use(bodyParser.urlencoded({extended: true}));

//tell app to use public dir
app.use(express.static("public"));
//set template engine to ejs
app.set("view engine", "ejs");

//default route
app.get('/', (req, res) => {
    res.render("home");
});

app.post('/addPet', (req, res) => {
    var newPet = req.body.petname;
    pets.push(newPet);
    //redirect to give illusion or refresh /pets
     res.redirect('/pets');
});

app.get('/pets', (req, res) => {
    res.render("pets", {pets: pets});
});

//not found route !NEEDS TO BE BOTTOM ROUTE!
app.get('*', (req, res) => {
    res.send("Sorry the page you are requesting is not available");
});

//set app to listen on 3000
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});