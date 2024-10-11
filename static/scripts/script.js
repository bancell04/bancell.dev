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

toggleCursor();


function mobileHeadshot() {
    
}