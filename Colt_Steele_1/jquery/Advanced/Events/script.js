$("h1").click(function() {
    alert("h1 clicked!");
});

$("button").click(function() {
    $(this).css("backgroundColor", "pink");
    console.log($(this).text());
});

$("input").keypress(function (e) { 
    if (e.which === 13) {
        console.log("User pressed Enter");
    }
});

$("h1").on("click", function (e) {
    $(this).css("color", "purple");
});

$("input").on("keypress", function (e) {
    console.log("keypressed");
});

$("button").on("mouseenter", function (e) {
    console.log("mouseneter");
    $(this).css("fontWeight", "bold");
});

$("button").on("mouseleave", function (e) {
    console.log("mouseleave");
    $(this).css("fontWeight", "normal");
});