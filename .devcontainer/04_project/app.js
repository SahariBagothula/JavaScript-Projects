const time = document.querySelector("#displayContainer");

setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString()
}, 2000);