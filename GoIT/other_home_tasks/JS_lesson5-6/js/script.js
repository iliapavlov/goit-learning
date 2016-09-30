

function MyTimer() {
	var secElem = document.querySelector('#seconds');
    var minElem = document.querySelector('#minutes');
    var hrElem = document.querySelector('#hours');
    var msecElem = document.querySelector('#milliseconds');

    var msec = 0;
    var sec = 0;
    var min = 0;
    var hr = 0;

    var timerId;
    var pause = true;
    var beginTime = null;
    var pauseTime = null;
    var restTime = 0;

    function mapping() {
    	var currentTime = new Date();

		var timeVar = new Date(currentTime - beginTime - restTime);

		msec = timeVar.getUTCMilliseconds();
		sec = timeVar.getUTCSeconds();
		min = timeVar.getUTCMinutes();
		hr = timeVar.getUTCHours();

		if (msec > 99) {
        	msecElem.innerHTML = msec;
        } else {
        	msecElem.innerHTML = msec > 9 ? '0' + msec : '00' + msec;
        }

        minElem.innerHTML = min > 9 ? min : '0' + min;
        hrElem.innerHTML = hr > 9 ? hr : '0' + hr;
        secElem.innerHTML = sec > 9 ? sec : '0' + sec;
    }

    function startSWatch() {
    	if (beginTime === null) {
    		beginTime = new Date();
    	}

    	if (pauseTime != null) {
    	    restTime += (new Date() - pauseTime);
    	}

		timerId = setInterval(mapping, 5);
		pause = false;
    }

    function stopSWatch() {
    	pauseTime = new Date();

    	clearInterval(timerId);
		pause = true;
    }

    this.run = function () {
    	if (pause) {
			startSWatch();			
			buttonStart.innerHTML = 'Pause';
		} else {
			buttonStart.innerHTML = 'Continue';
			stopSWatch();
		}
    };

    this.clearTimer = function() {
    	stopSWatch();

    	msec = 0;
        sec = 0;
        min = 0;
        hr = 0;

    	minElem.innerHTML = '00';
        hrElem.innerHTML = '00';
        secElem.innerHTML = '00';
        msecElem.innerHTML = '000';

        beginTime = null;
        pauseTime = null;
        restTime = 0;

		if (buttonStart.innerHTML != 'Start') {
			buttonStart.innerHTML = 'Start';
		}
    };
}

var myTimer = new MyTimer();

var buttonStart = document.querySelector('#start');
var buttonClear = document.querySelector('#stop');

buttonStart.addEventListener('click', myTimer.run);
buttonClear.addEventListener('click', myTimer.clearTimer);



// var start = new Date().getTime(),
//     elapsed = '0.0';

// window.setInterval(function()
// {
//     var time = new Date().getTime() - start;

//     elapsed = Math.floor(time / 100) / 10;
//     if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

//     document.title = elapsed;

// }, 100);