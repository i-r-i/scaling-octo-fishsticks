function display_time() {
    const time = new Date();
    const targetTime = new Date();
    e = document.getElementById("date_time");
    e.textContent = ""
    switch (time.getDay()) {
        case 0:
            e.textContent += "No school today! ";
            targetTime.setDay(targetTime.getDate() - 1)
            break;
        case 1:
        case 5:
            targetTime.setHours(16, 0, 0, 0);
            break;
        case 2:
        case 3:
        case 4:
            targetTime.setHours(17, 15, 0, 0);
            break;
        default:
            targetTime.setHours(11, 0, 0, 0)
    }
    const change = (targetTime - time);

    if (change <= 0) {
        e.textContent += "Time until school:\n"
        targetTime.setDate(targetTime.getDate() + 1)
        targetTime.setHours(8, 45, 0, 0)
    } else {
        e.textContent += "Time until home:\n"
    }

    const hoursDifference = Math.floor(change / (1000 * 60 * 60));
    const minutesDifference = Math.floor((change % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDifference = Math.floor((change % (1000 * 60)) / 1000);
    e.textContent += `${hoursDifference}:${minutesDifference}:${secondsDifference}`;
}
setInterval(display_time, 1000);