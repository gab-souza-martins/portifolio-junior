const offcanvasNavbar = document.getElementById(
   "offcanvasNavbar"
) as HTMLElement | null;
const expandedNavbar = document.getElementById(
   "expandedNavbar"
) as HTMLElement | null;

function activeToggle(target: HTMLElement | null) {
   if (target) {
      target.querySelectorAll(".nav-link").forEach((el: HTMLElement) => {
         el.addEventListener("click", () => {
            target.querySelectorAll(".nav-link").forEach((el) => {
               el.classList.remove("active");
            });
            el.classList.add("active");
         });
      });
   }
}

if (offcanvasNavbar) {
   activeToggle(offcanvasNavbar);
}
if (expandedNavbar) {
   activeToggle(expandedNavbar);
}
