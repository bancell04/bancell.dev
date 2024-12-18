function toggleCursor() {
    const image = document.getElementById('cursor');
    let isVisible = true;

    setInterval(() => {
        if (isVisible) {
            image.style.visibility = 'hidden'; // or use image.classList.add('hidden');
        } else {
            image.style.visibility = 'visible'; // or use image.classList.remove('hidden');
        }
        isVisible = !isVisible;
    }, 600);
}

function darkModeToggle() {
    body.classList.toggle('dark-mode');
    updateDarkModeElements();
}

function updateDarkModeElements() {
    const buttonImg = document.getElementById("theme-img");
    const githubImg = document.getElementById("github-logo");
    const cursorImg = document.getElementById("cursor");
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
    const pathPrefix = isHomePage ? "static/images/" : "../static/images/";

    if (body.classList.contains('dark-mode')) {
        buttonImg.setAttribute("src", pathPrefix + "light-mode-icon.png");
        githubImg.setAttribute("src", pathPrefix + "github-white.png");
        cursorImg.setAttribute("src", pathPrefix + "cursor-white.jpg");
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        buttonImg.setAttribute("src", pathPrefix + "dark-mode-icon.png");
        githubImg.setAttribute("src", pathPrefix + "github-logo.png");
        cursorImg.setAttribute("src", pathPrefix + "cursor.jpg");
        localStorage.setItem('dark-mode', 'disabled');
    }
}

function checkDarkModePreference() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
}

function checkMobile() {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        const mobileHeadshot = document.getElementById("mobile-headshot");
        const headshot = document.getElementById("headshot");
        if (window.innerWidth <= 600) {
            console.log("mobile!");
            mobileHeadshot.style.display = "block";
            headshot.style.display = "none";
        } else {
            console.log("not mobile!");
            mobileHeadshot.style.display = "none";
            headshot.style.display = "block";
        }
    } else {
        return;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    toggleCursor();
    checkDarkModePreference();
    updateDarkModeElements();
    checkMobile();
});

window.addEventListener('resize', () => {
    checkMobile();
});

const body = document.body;