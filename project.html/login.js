const wrapper =document.querySelector('.wrapper');
const loginlink =document.querySelector('.login-link');

const btnpopup =document.querySelector('.btnlogin-popup');

const iconClose =document.querySelector('.icon-close');



btnpopup.addEventListener('click',()=>
{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>
{
    wrapper.classList.remove('active-popup');
});
