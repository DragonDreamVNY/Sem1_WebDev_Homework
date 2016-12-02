/*default brush radius is 5% of the width of the canvas, but we never want the radius to be less than 50px (approximately the size of the fingertip*/
	var bridge = document.getElementById("bridge"),
	bridgeCanvas = bridge.getContext('2d'),
	brushRadius = (bridge.width / 100) * 5,
	img = new Image();
	if (brushRadius < 50) { brushRadius = 50 }
	
	/*“cover” image is drawn on the canvas, over the background image. The image is determined from combining image.loc and the base filename; -2x for Retina displays*/

	img.onload = function(){  
    bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
	}
	img.loc = 'images/';
	img.filename = 'canvas2.jpg';
	if (window.devicePixelRatio >= 2) {
	    var nameParts = img.filename.split('.');
	    img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
	} else {
	    img.src = img.loc + img.filename;
	}

	/*Detecting mousemove and touch on the <canvas> is achieved in two event listeners:*/
	bridge.addEventListener("mousemove", function(e) {
	    var brushPos = getBrushPos(e.clientX, e.clientY);
	    var leftBut = detectLeftButton(e);
	    if (leftBut == 1) {
	        drawDot(brushPos.x, brushPos.y);
   		}
	}, false);
	
	bridge.addEventListener("touchmove", function(e) {
	    e.preventDefault();
	    var touch = e.targetTouches[0];
	    if (touch) {
	        var brushPos = getBrushPos(touch.pageX, touch.pageY);
	        drawDot(brushPos.x, brushPos.y);
	    }
	}, false);


	function detectLeftButton(event) {
	    if ('buttons' in event) {
	        return event.buttons === 1;
	    } else if ('which' in event) {
	        return event.which === 1;
	    } else {
	        return event.button === 1;
	    }
	}

	function getBrushPos(xRef, yRef) {
    var bridgeRect = bridge.getBoundingClientRect();
    return {
	      x: Math.floor((xRef - bridgeRect.left) / (bridgeRect.right - bridgeRect.left) * bridge.width),
	      y: Math.floor((yRef - bridgeRect.top) / (bridgeRect.bottom - bridgeRect.top) * bridge.height)
	    };
	}

	/* photograph underneath, a circular “dot” is drawn on the canvas with a globalCompositeOperation*/

	function drawDot(mouseX,mouseY){
	    bridgeCanvas.beginPath();
	    bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
	    bridgeCanvas.fillStyle = '#000';
	    bridgeCanvas.globalCompositeOperation = "destination-out";
	    bridgeCanvas.fill();
	}