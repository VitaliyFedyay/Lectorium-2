function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}

function quad(timeFraction) {
	return Math.pow(timeFraction, 2);
}

start.onclick = function () {

	let height = field.clientHeight - ball.clientHeight;
	let width = 800;

	animate({
		timing: quad,
		duration: 1000,
		draw: function (progress) {
			ball.style.transform = 'rotate(' + Math.floor(progress * 360) + 'deg)';
			ball.style.marginLeft = Math.floor(progress * 700) + 'px';
		},
	});

}