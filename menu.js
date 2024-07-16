window.addEventListener("scroll", function() {
    let menu = document.querySelector('#menu');
    menu.classList.toggle('rolagem', window.scrollY > 100);
});
