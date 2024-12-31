function updateClock() {
    const now = new Date();


    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();


    const secondAngle = (seconds / 60) * 360;
    const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    document.getElementById('second-hand').style.transform = `rotate(${secondAngle}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hourAngle}deg)`;
}


setInterval(updateClock, 1000);

updateClock();
