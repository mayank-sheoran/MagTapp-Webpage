const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.getElementById("navslide")
    burger.addEventListener('click',()=>{
        nav.classList.toggle("nav-active")
    })
}

navSlide();