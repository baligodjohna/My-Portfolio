document.addEventListener('mousemove', (e) => {
    const lightEffect = document.getElementById('lightEffect');
    const light = document.createElement('div'); // Create a new div for the light effect
    light.classList.add('light'); // Add the 'light' class to the new div
    const size = Math.random() * 150 + 150; // Random size between 150 and 300
    light.style.width = `${size}px`;
    light.style.height = `${size}px`;
    light.style.left = `${e.pageX}px`;
    light.style.top = `${e.pageY}px`;
    lightEffect.appendChild(light); // Append the light effect to the 'lightEffect' div
});

