const burger = document.querySelector('.burger');
const menu = document.querySelector('#burgernav');
const liens = document.querySelectorAll('#burgernav a,#logo');

burger.addEventListener('click', () => {

    menu.classList.toggle('menu-open');
    burger.classList.toggle('burger-cross');

});
console.log(liens);
liens.forEach((lien) => {
    lien.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        burger.classList.remove('burger-cross');
    });
});