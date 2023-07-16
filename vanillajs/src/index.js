import './style.scss';

let mainText = document.getElementById("mainText");
let concentric = document.querySelector(".centric");
let dotted1 = document.querySelector(".dotted1");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    mainText.style.marginTop = scrollY * 0.5 + "px";

    concentric.style.top = scrollY * -0.7 + "px";
    dotted1.style.top = scrollY * -0.7 + "px";
});
