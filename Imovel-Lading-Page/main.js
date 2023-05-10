const mobileMenu = document.getElementById('menu-mobile')
const iconMenu = document.getElementById('icone-menu')

const showMenu = () => {
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open')
        iconMenu.classList.remove('fa-xmark')
        iconMenu.classList.add('fa-bars')
    } else {
        mobileMenu.classList.add('open')
        iconMenu.classList.remove('fa-bars')
        iconMenu.classList.add('fa-xmark')
    }
}