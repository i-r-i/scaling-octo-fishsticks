function display_time() {
    const time = new Date();
    const curtime = time.toLocaleTimeString();
    document.getElementById("date_time").textContent = curtime;
}
setInterval(display_time, 1000);