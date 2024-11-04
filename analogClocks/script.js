const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height=500;

const ctx = canvas.getContext("2d");
function degToRadian(degree) {
    return (degree * Math.PI)/180;
}

//Date - give back object

function render() {



const now = new Date();
const today = now.toDateString();

const time = now.toLocaleTimeString("en-GB");

const hours = now.getHours();
const minutes  = now.getMinutes();
const seconds = now.getSeconds();
const milli = now.getMilliseconds();

const gradient = ctx.createRadialGradient(250, 250, 5 , 250, 250, 250);

gradient.addColorStop(0,"rgb(0,40,180)");

gradient.addColorStop(1,"black");

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 500, 500);

//lines -strelki

ctx.strokeStyle = "#00BCD4";
ctx.lineWidth = 10;
ctx.shadowColor = "#00BCD4";
ctx.shadowBlur = 15;

//hours
    ctx.beginPath();
    ctx.arc(250, 250, 200,  degToRadian(270),degToRadian((hours*30) - 90));
    ctx.stroke();

const minWithSec = minutes + (seconds / 60);

//minutes
ctx.beginPath();
ctx.arc(250, 250, 185, degToRadian(270), degToRadian((minWithSec * 6) - 90 ));
ctx.stroke();

const secWithMilli = seconds + (milli/1000);
ctx.beginPath();
ctx.arc(250, 250, 165, degToRadian(270), degToRadian((secWithMilli * 6) - 90 ));
ctx.stroke();


ctx.fillStyle = "white";
ctx.font = "20px san-serif"
ctx.fillText(today, 180, 240);


ctx.fillStyle = "white";
ctx.font = "20px san-serif"
ctx.fillText(time, 220, 270);

}

setInterval(render, 10);

//const randomNumber = Math.floor(Math.random() * 100) + 1;
// Math.floor(Math.random() * 100) + 1;
// Создать игру, где пользователь должен отгадать число в диапазоне от 1-100. Программа сама рандомно будет выбирать это число. У нашего пользователя будет 3 попытки, чтобы отгадать.

