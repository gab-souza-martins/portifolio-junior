var offcanvasNavbar = document.getElementById("offcanvasNavbar");
var expandedNavbar = document.getElementById("expandedNavbar");
function activeToggle(target) {
    if (target) {
        target.querySelectorAll(".nav-link").forEach(function (el) {
            el.addEventListener("click", function () {
                target.querySelectorAll(".nav-link").forEach(function (el) {
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
