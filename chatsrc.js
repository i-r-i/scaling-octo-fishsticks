function updateCountdown() {
    const now = new Date();
    const schoolStartTimes = {
        Monday: "08:45",
        Tuesday: "08:45",
        Wednesday: "08:45",
        Thursday: "08:45",
        Friday: "08:45",
        Saturday: "08:45"
    };
    const schoolEndTimes = {
        Monday: "16:00",
        Tuesday: "17:15",
        Wednesday: "17:15",
        Thursday: "17:15",
        Friday: "16:00",
        Saturday: "11:00"
    };

    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
    let countdownType = "SCHOOL";

    if (currentTime >= timeToSeconds(schoolStartTimes[dayOfWeek]) && currentTime < timeToSeconds(schoolEndTimes[dayOfWeek])) {
        countdownType = "HOME";
    }

    let targetTime;
    if (countdownType === "school") {
        targetTime = timeToSeconds(schoolStartTimes[dayOfWeek]);
    } else {
        targetTime = timeToSeconds(schoolEndTimes[dayOfWeek]);
    }

    const timeRemaining = targetTime - currentTime;
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const countdownElement = document.getElementById("date_time");
    const countdownTypeElement = document.getElementById("display_top");

    countdownElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    countdownTypeElement.textContent = countdownType;
}

function timeToSeconds(time) {
    const [hours, minutes] = time.split(":");
    return parseInt(hours) * 3600 + parseInt(minutes) * 60;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set up the countdown
updateCountdown();
