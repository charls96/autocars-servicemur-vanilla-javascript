const burguerButton = document.querySelector('.burguer-button-mobile');
const crossButton = document.querySelector('.cross-button-mobile');
const menuMobile = document.querySelector('.menu-mobile');

burguerButton.addEventListener('click', showMenuMobile);
crossButton.addEventListener('click', hideMenuMobile);

function showMenuMobile(){
    menuMobile.classList.remove('hidden');
    burguerButton.classList.add('hidden');
    crossButton.classList.remove('hidden');
}

function hideMenuMobile(){
    menuMobile.classList.add('hidden');
    burguerButton.classList.remove('hidden');
    crossButton.classList.add('hidden');
}