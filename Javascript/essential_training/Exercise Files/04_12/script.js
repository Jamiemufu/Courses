function giveMeEms(pixels) {
	var baseValue = 16;

	function doTheMath() {
		return pixels/baseValue;
	}

	return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(52);

console.log("smallsize: ", smallSize());
console.log("Mediumsize: ", mediumSize());
console.log("Largesize: ", largeSize());
console.log("XLsize: ", xLargeSize());