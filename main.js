if (matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    document.getElementById("body").className = "dark-mode";
} else {
    // light mode
    document.getElementById("body").className = "light-mode";
}

function toggleDarkLight() {
    let currentThemeClass = document.getElementById("body").className;
    body.className = currentThemeClass === "dark-mode" ? "light-mode" : "dark-mode";
}