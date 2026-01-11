const popUp = document.getElementById('popUp');

document.querySelectorAll('svg path').forEach(country => {
    // Check if this path has a visible fill
    const fillColor = window.getComputedStyle(country).fill;
    const isVisible = fillColor && fillColor !== 'none' && fillColor !== 'rgba(0, 0, 0, 0)';

    if (!isVisible) {
        country.style.scale = 'none';
        // Skip paths that have no visible fill
        return;
    }

    // Only paths with fill get the hover event
    country.addEventListener('mousemove', e => {
        const name = country.getAttribute('data-name') || "Unknown Country";
        const cities = country.getAttribute('data-cities') || "";

        popUp.style.display = 'block';
        popUp.style.left = e.pageX + 10 + 'px';
        popUp.style.top = e.pageY + 10 + 'px';

        const citiesHTML = cities ? cities.split(',').join('<br>') : '';

        popUp.innerHTML = `<strong>${name}</strong><br>${citiesHTML}`;
    });

    country.addEventListener('mouseleave', () => {
        popUp.style.display = 'none';
    });
});
