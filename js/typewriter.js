var i = 0;
var speed = 100;
var headingText = "Gabriel de Souza";
var descriptionText = "Desenvolvedor front-end júnior";
function typewriter() {
    document.getElementById("heroHeading").innerHTML += headingText.charAt(i);
    document.getElementById("heroDescription").innerHTML +=
        descriptionText.charAt(i);
    i++;
    setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter);
