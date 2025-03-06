function toggleDropdown() {
    let box = document.getElementById("beerBox");
    let button = document.querySelector(".dropdown-btn");

    box.classList.toggle("show");
    button.classList.toggle("open");
}
document.querySelectorAll('.icon').forEach(icon => {
    const img = document.createElement('img');
    img.src = icon.getAttribute('data-img');
    img.alt = icon.getAttribute('data-text');
    icon.appendChild(img);

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = icon.getAttribute('data-text');
    icon.appendChild(popup);

    icon.addEventListener('mouseenter', () => popup.style.opacity = '1');
    icon.addEventListener('mouseleave', () => popup.style.opacity = '0');
});

