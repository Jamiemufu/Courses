function average(scores) {
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    var avg = total/scores.length
    return Math.round(avg);
}

var scores = [90, 89, 98, 99, 100, 100];
console.log(average(scores))