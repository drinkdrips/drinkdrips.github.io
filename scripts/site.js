const navigationToggle=document.querySelector('.nav-toggle');
const navigation=document.querySelector('.main-nav');
if(navigationToggle&&navigation){navigationToggle.addEventListener('click',()=>{const open=navigationToggle.getAttribute('aria-expanded')==='true';navigationToggle.setAttribute('aria-expanded',String(!open));navigation.classList.toggle('is-open',!open)});navigation.addEventListener('click',event=>{if(event.target instanceof HTMLAnchorElement){navigationToggle.setAttribute('aria-expanded','false');navigation.classList.remove('is-open')}})}
