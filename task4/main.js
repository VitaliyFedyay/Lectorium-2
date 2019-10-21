function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction)
	}
}

function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}

start.onclick = function () {

	let width = 50

	animate({
		timing: quad,
		duration: 2000,
		draw: function (progress) {
			ball.style.transform = 'rotate(' + Math.floor(progress * 360) + 'deg)'
		},
	})

	animate({
		duration: 2000,
		timing: makeEaseOut(quad),
		draw: function (progress) {
			ball.style.left = width * progress + "vw"
		}
	})
}
