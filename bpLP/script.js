function scrollValue() {
    var navbar = document.getElementById('bgNavbar');
    var scroll = window.scrollY;
    if (scroll < 60) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', scrollValue);