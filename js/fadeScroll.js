var scrollElements = document.querySelectorAll(".scroll-section");
window.addEventListener("scroll", function () {
    scrollElements.forEach(function (e) {
        var elementPosition = e.getBoundingClientRect();
        var elementHeight = elementPosition.top;
        if (elementHeight < 300) {
            e.classList.add("show-section");
        }
    });
});
