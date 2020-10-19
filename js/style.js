
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
});

