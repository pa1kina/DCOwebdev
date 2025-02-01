document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

window.addEventListener("load", () => {
    document.getElementById("fade").classList.add("fade-in");
});