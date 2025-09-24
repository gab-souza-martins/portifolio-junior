let i: number = 0;
let speed: number = 100;

let headingText: string = "Gabriel de Souza";
let descriptionText: string = "Desenvolvedor front-end júnior";

function typewriter() {
   document.getElementById("heroHeading")!.innerHTML += headingText.charAt(i);
   document.getElementById("heroDescription")!.innerHTML +=
      descriptionText.charAt(i);
   i++;
   setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);
