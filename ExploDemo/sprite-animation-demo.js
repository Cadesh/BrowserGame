
(function () {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/
	// MIT license

	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
			window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
}());

(function () {

	var explo,
		exploImage,
		canvas;

	function gameLoop() {

		window.requestAnimationFrame(gameLoop);
		explo.update();
		explo.render();
	}


	function playSprite() {

		window.requestAnimationFrame(gameLoop);
		explo.update();
		explo.render();
	}

	function sprite(options) {

		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;

		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;

		that.update = function () {

			tickCount += 1;

			if (tickCount > ticksPerFrame) {

				tickCount = 0;

				// If the current frame index is in range
				if (frameIndex < numberOfFrames - 1) {
					// Go to the next frame
					frameIndex += 1;
				} else {
					frameIndex = 0;
				}
			}
		};

		that.render = function () {

			// Clear the canvas
			that.context.clearRect(0, 0, that.width, that.height);

			// Draw the animation
			that.context.drawImage(
				that.image,
				frameIndex * that.width / numberOfFrames,
				0,
				that.width / numberOfFrames,
				that.height,
				0,
				0,
				that.width / numberOfFrames,
				that.height);
		};
		return that;
	}

	// Get canvas
	canvas = document.getElementById("explosion");
	canvas.width = 400;
	canvas.height = 400;

	// Create sprite sheet
	exploImage = new Image();
	//exploImage2 = new Image();

	// Create sprite
	explo = sprite({
		context: canvas.getContext("2d"),
		width: 3200,
		height: 400,
		image: exploImage,
		numberOfFrames: 8,
		ticksPerFrame: 6
	});

	// Load sprite sheet
	exploImage.addEventListener("load", gameLoop);
	exploImage.src = "images/explo.png";

//	exploImage2.addEventListener("load", gameLoop);
//	exploImage2.src = "images/explo.png";

}());