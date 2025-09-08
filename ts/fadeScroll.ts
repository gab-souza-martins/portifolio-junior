const scrollElements = document.querySelectorAll(".scroll-section");

window.addEventListener("scroll", () => {
   scrollElements.forEach((e) => {
      const elementPosition = e.getBoundingClientRect();
      const elementHeight = elementPosition.top;

      if (elementHeight < 300) {
         e.classList.add("show-section");
      }
   });
});
