function menuShow() {
    let menuMobile = document.querySelector('.menu_mobile');
    if (menuMobile.classList.contains('aberto')) {
        menuMobile.classList.remove('aberto');
        document.querySelector('.icon').src = "/assets/menu_white.svg";
    } else {
        menuMobile.classList.add('aberto');
        document.querySelector('.icon').src = "/assets/close_white.svg";
    }

}