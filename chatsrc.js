function updateCountdown() {
    const now = new Date();

    // Setting up the times to compare against
    const schoolStartTimes = [8, 45];
    const schoolEndTimes = {
        1: [16, 0],
        2: [17, 15],
        3: [17, 15],
        4: [16, 0],
        5: [16, 0],
        6: [11, 0]
    };

    // If today is Sunday
    if (now.getDay() == 0) {
        const changeTime = new Date();
        changeTime.setDate(changeTime.getDate() + 1);
        changeTime.setHours(schoolStartTimes[0], schoolStartTimes[1], 0, 0);
        formatDate(now.getTime() - changeTime.getTime());
        return;
    }

    const schoolStart = new Date();
    schoolStart.setHours(schoolStartTimes[0], schoolStartTimes[1], 0, 0);

    // Is it before 8:45
    if (schoolStart > now) {
        formatDate(schoolStart.getTime() - now.getTime());
        return;
    }

    const schoolEndTime = schoolEndTimes[now.getDay()];
    const schoolEnd = new Date();
    schoolEnd.setHours(schoolEndTime[0], schoolEndTime[1], 0, 0);

    // Is it before the end of school
    if (schoolEnd > now) {
        formatDate(schoolEnd.getTime() - now.getTime());
        return;
    }

    // Is today Saturday
    if (now.getDay() == 6) {
        const changeTime = new Date();
        changeTime.setDate(changeTime.getDate() + 2);
        changeTime.setHours(schoolStartTimes[0], schoolStartTimes[1], 0, 0);
        formatDate(now.getTime() - changeTime.getTime());
        return;
    }

    const changeTime = new Date();
    changeTime.setDate(changeTime.getDate() + 1);
    changeTime.setHours(schoolStartTimes[0], schoolStartTimes[1], 0, 0);
    formatDate(now.getTime() - changeTime.getTime());
    return;
}

function formatDate(time) {
    // Converting time to correct format
    time = Math.floor(Math.abs(time) / 1000);
    const hours = Math.abs(Math.floor(time / 3600)).toString().padStart(2, "0");
    const minutes = Math.abs(Math.floor((time % 3600) / 60)).toString().padStart(2, "0");
    const seconds = Math.abs(time % 60).toString().padStart(2, "0");

    // Displaying to HTML
    const e = document.getElementById("date_time");
    e.textContent = `${hours}:${minutes}:${seconds}`;
}



// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set up the countdown
updateCountdown();