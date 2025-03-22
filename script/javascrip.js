/*********************************Carousel***********************************/
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 600,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false,
    });
});




let enlaces = document.querySelectorAll('.lista-content li a');

enlaces.forEach((element)=>{
    element.addEventListener('click',(event)=>{
       //console.log(event.target)
       enlaces.forEach((link)=>{
            link.classList.remove('activo');
            
       })
       event.target.classList.add('activo');
       menu.style.left = '-100%';
       
    })

})



/********************MENU HAMBURGUESA**********/

let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.lista-content');

let activador = true;

btnMenu.addEventListener('click',()=>{
    barIconX.classList.toggle('fa-times');

    if(activador){
        menu.style.left = '0';
        activador = false;
    }else{
        menu.style.left = '-100%';
        activador = true;
    }
})







