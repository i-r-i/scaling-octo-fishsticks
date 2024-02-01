function updateCountdown() {
    const now = new Date();
    const schoolStartTimes = (8, 45);

    if (now.getDay() == 6) {
        const changeTime = new Date();
        changeTime.setDate(changeTime.getDate() + 1);
        changeTime.setHours(schoolStartTimes[0], schoolStartTimes[1]);
        formatDate(time - changeTime);
    }

    const schoolStart = new Date();
    schoolStart.setHours(schoolStartTimes[0], schoolStartTimes[1]);

    const schoolEndTimes = {
        0: (16, 0),
        1: (17, 15),
        2: (17, 15),
        3: (17, 15),
        4: (16, 0),
        5: (11, 0)
    };
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
setInterval(formatDate, 1000);

// Initial call to set up the countdown
// updateCountdown();

// TEST CODE HERE

