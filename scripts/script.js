// For Education and Certifications Page: Toggle between A Levels and IT Certification pages
function togglePages() {
    const a_level_btn = document.getElementById("a-levels-btn");
    const cert_btn = document.getElementById("cert-btn");
    const a_level = document.getElementById("a-levels");
    const cert = document.getElementById("cert");

    a_level_btn.onclick = () => {
        cert.style.display = "none";
        a_level.style.display = "block";

    }

    cert_btn.onclick = () => {
        cert.style.display = "block";
        a_level.style.display = "none";
        console.log(cert);
    }
}



// Dark and Light Mode Features
function toggleIcon() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");
    console.log(body.classList);
    if (body.classList.contains("light-mode")) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        icon.src = "../images/sun.png";
        localStorage.setItem('darkMode', "true");
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        icon.src = "../images/moon.png";
        localStorage.setItem('darkMode', "false");
    }
}

// Checking Local Storage for Cached Light/Dark Mode Setting
function applyColorTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === "true";
    const icon = document.getElementById("theme-icon");

    if (isDarkMode) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        icon.src = "../images/sun.png";

    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');

    }
}



// Run defaults when webpage is loaded
document.addEventListener("DOMContentLoaded", () => {
    applyColorTheme();
    togglePages();
    }
);

