//Object constructor
function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var courses = [
    new Course("JavaScript Training", "Morton Rand", 1, true, 0),
    new Course("up and running ECMA6", "Eve", 2, true, 100)
];

console.log(courses);