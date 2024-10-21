document.addEventListener('mousemove', function(e) {
    const light = document.querySelector('.light');
    

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    light.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});
