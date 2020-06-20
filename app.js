const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.getElementById("navslide")
    burger.addEventListener('click',()=>{
        active1 = document.getElementsByClassName('nav-active1');
        active2 = document.getElementsByClassName('nav-active2');
        if(window.pageYOffset>0){
            if(active2.length==0){
                nav.classList.toggle("nav-active1")
            }
            else{
                nav.classList.toggle("nav-active2")
                nav.classList.toggle("nav-active1")
            }
        }
        else{
            if(active1.length==0){
                nav.classList.toggle("nav-active2")
            }
            else{
                nav.classList.toggle("nav-active1")
                nav.classList.toggle("nav-active2")
            }
        }
        
    })
}

const navScroll = ()=>{
    window.addEventListener("scroll", ()=>{
        const container = document.querySelector(".container");
        active1 = document.getElementsByClassName('nav-active1');
        active2 = document.getElementsByClassName('nav-active2');
        console.log(active2)
        if(window.pageYOffset>0 && active1.length==0 && active2.length==0 ){
            container.classList.add("nav-scroll");
            document.querySelector('.logo').classList.add("logo-scroll");
            document.querySelector('.toogle-button').classList.add("button-scroll");
            document.querySelector('.nav-links').classList.add("nav-links-scroll");
        }
        else{
            container.classList.remove("nav-scroll");
            document.querySelector('.logo').classList.remove("logo-scroll");
            document.querySelector('.toogle-button').classList.remove("button-scroll");
            document.querySelector('.nav-links').classList.remove("nav-links-scroll");
        }
    })
}


navScroll();
navSlide();



if(window.innerWidth< 970){
    document.querySelector('.comp1-img2').classList.add("comp1-link")
    document.querySelector('#googleplaystore').style.width = "20vw"
    document.querySelector('.para').innerHTML = 'MagTapp 2.0 is coming with all new features that will make your life easier than before stay tuned!'
}
else{
    document.querySelector('.comp1').classList.add("comp1-large")
    document.querySelector('.para').innerHTML = 'MagTapp is an Empowerment Tool which helps anyone Read and UnderstandContent with the help of a Visual Meaning on Internet or in Documents files.MagTapp is a Web Browse with an Inbuilt Image Dictionary & Document Readerfeature.'
}






