document.addEventListener("DOMContentLoaded", function () {

const text = "Hello, I'm Jeevanantham";
let index = 0;

function typeEffect() {
if (index < text.length) {
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(typeEffect, 100);
}
}

typeEffect();

const button = document.getElementById("welcomeBtn");

if (button) {
button.addEventListener("click", function () {
alert("Welcome to Jeeva's Portfolio!");
});
}

});