function showTime() {
    let now = new Date();
    
    let hour = now.getHours(); 
    let min = now.getMinutes();
    let sec = now.getSeconds();


    let displayHour = hour;

    if (hour > 12) {
        displayHour = hour - 12; 
    }
    if (hour = 0) {
        displayHour = 12; 
    }


    if (displayHour < 10) {
        displayHour = "0" + displayHour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }


    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning";
    }
    if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    }
    if (hour >= 18) {
        greeting = "Good Evening";
    }


    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("clock").innerHTML = displayHour + ":" + min + ":" + sec;
}

showTime();


setInterval(showTime, 1000);