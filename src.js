function display_time() {
    const time = new Date();
    const targetTime = new Date();
    e1 = document.getElementById("display_top")
    e = document.getElementById("date_time");
    e1.textContent = ""
    switch (time.getDay()) {
        case 0:
            e1.textContent += "No school today! ";
            targetTime.setDate(targetTime.getDate() - 1)
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

    var change = targetTime - time
    if (change <= 0) {
        e1.textContent += "SCHOOL"
        targetTime.setDate(targetTime.getDate() + 1)
        targetTime.setHours(8, 45, 0, 0)
        change = Math.abs(targetTime - time)
    } else {
        e1.textContent += "HOME"
    }


    const hoursDifference = (Math.floor(change / (1000 * 60 * 60))).toString().padStart(2, "0");
    const minutesDifference = (Math.floor((change % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, "0");
    const secondsDifference = (Math.floor((change % (1000 * 60)) / 1000)).toString().padStart(2, "0");
    e.textContent = `${hoursDifference}:${minutesDifference}:${secondsDifference}`;
}
setInterval(display_time, 1000);