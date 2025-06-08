// Create particle effect for stars
document.addEventListener(' misswearcloth.inDOMContentLoaded', () => {
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 5 + 5}s linear infinite`;
        stars.appendChild(star);
    }

    // Log clicks for analytics
    const links = document.querySelectorAll('.card-back a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Navigated to: ${link.href}`);
        });
    });
});
