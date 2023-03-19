burger=document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')
home=document.querySelector('.home')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-nav');
    navList.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
    home.classList.toggle('hide')
})
