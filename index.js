let secounds = 0;
let minutes = 0;
let hours = 0;

const stopWatch = () => {
	secounds++;

    if (secounds > 60) {
        minutes++;
        secounds = 0;
    }

    if (minutes > 60) {
        hours++;
        minutes = 0;
    }

    const formatTime = (time) => {
        return time < 10 ? '0' + time : String(time);
    }

    let formattedSecounds = formatTime(secounds);
    let formattedMinutes = formatTime(minutes);
    let formattedHours = formatTime(hours);
    
    console.log(formattedHours + ":" + formattedMinutes + ":" + formattedSecounds);
}

setInterval(stopWatch, 50);