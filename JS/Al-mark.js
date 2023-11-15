$('.banner-theme').owlCarousel({
    /*the little visible images at the end of the carousel*/
    loop:true,
    lazyLoad:true,
    margin:0,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1,
            autoplay: true,
        },
        600:{
            items:1,
        },
        800:{
            items: 1
        },
        1000:{
            items:1
        },
      1200:{
          items: 1
      }
    }
})

$('.client-theme').owlCarousel({
    /*the little visible images at the end of the carousel*/
    loop:true,
    lazyLoad:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1,
            autoplay: true,
            autoPlaySpeed: 5000,
            autoPlayTimeout: 5000,
            autoplayHoverPause: true,
        },
        600:{
            items:1,
            autoplay: true,
            autoPlaySpeed: 5000,
            autoPlayTimeout: 5000,
            autoplayHoverPause: true,
        },
        700:{
          items:2,
          autoplay: true,
          autoPlaySpeed: 5000,
          autoPlayTimeout: 5000,
          autoplayHoverPause: true,
        },
        800:{
            items: 2,
            autoplay: true,
            autoPlaySpeed: 5000,
            autoPlayTimeout: 5000,
            autoplayHoverPause: true,
        },
        1000:{
            items:2,
             autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
        },
      1200:{
          items: 2
      }
    }
})




const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

    
  });
});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


 $(".button-1").click(function(){
  $(".button-1").toggleClass("active");
  $(".input").toggleClass("active");

 });