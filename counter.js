let deadline = new Date("April 30, 2024 8:30:00")
.getTime();

let x = setInterval(function () {

let now = new Date().getTime();

let t = deadline - now;

let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor(
(t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor(
(t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor(
(t % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days;
document.getElementById("hr").innerHTML = hours;
document.getElementById("min").innerHTML = minutes;
document.getElementById("sec").innerHTML = seconds;

if (t < 0) {
clearInterval(x);
document.getElementById("counter")
.innerHTML = "EXPIRED";
}
}, 1000);