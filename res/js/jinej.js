let sipka = document.getElementById("sipka");
let sipka2 = document.getElementById("sipka2");

window.onload = () => {
    let state = 0
    setInterval(() => {
        if (state == 0) {
            sipka.style.fontSize = 60 + "px";
            sipka2.style.fontSize = 60 + "px";
            state++;
        } else {
            sipka.style.fontSize = 70 + "px";
            sipka2.style.fontSize = 70 + "px";
            state--;
        }
    }, 500)
}