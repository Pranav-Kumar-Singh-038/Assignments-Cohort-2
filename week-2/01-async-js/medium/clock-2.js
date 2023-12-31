const currentTime = new Date();

let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
let second = currentTime.getSeconds();

function displayTime() {
    console.clear();
    second++;

    if (second === 60) {
        second = 0;
        minute++;
    }

    if (minute === 60) {
        minute = 0;
        hour++;
    }

    if (hour === 24) {
        hour = 0;
    }

    if(hour>=12)
    {
        console.log(`${hour-12}h:${minute}m:${second}s PM`);
    }
    else
    {
        console.log(`${hour}h:${minute}m:${second}s AM`);
    }
}

setInterval(displayTime, 1000);