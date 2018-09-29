// $("button").on("click", function(e) {
//     //console.log after FADE not immediatly. Needs to be added to the callback
//     $("div").fadeOut(1000, function () {
//         console.log("Fade Completed");
//         $(this).remove();
//     });
    
// });

// $("button").on("click", function (e) {
//     //console.log after FADE not immediatly. Needs to be added to the callback
//     $("div").fadeIn(1000, function () {
//         console.log("Fade Completed");
//     });

// });


// $("button").on("click", function (e) {
//     //console.log after FADE not immediatly. Needs to be added to the callback
//     $("div").fadeToggle(1000, function () {
//         console.log("Fade Completed");
//     });

// });


$("button").on("click", function (e) {
    //console.log after FADE not immediatly. Needs to be added to the callback
    $("div").slideToggle(1000, function () {
        console.log("Fade Completed");
    });

});