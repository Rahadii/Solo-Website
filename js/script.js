// Jquery Script

// $('.content').css({
//     color: '#333fff',
//     fontSize: 20
// });

// $('h1').click(function() {

//     $('.content').css({
//         color: 'blue',
//         fontSize:50
//     });
// });



// ===== document ready ===== 
// $(document).ready(function(){

// });

// ===== simple document ready ======
// $(function(){
//     $('h1').slideUp(1000).slideDown(1000);

//     $('#main').css({
//         color: 'red',
//         fontSize: 25
//     });

//     $('#main').click(function() {
//         $('.content').hide();
//     });
// });

/* ======================================
                Preloader 
   ====================================== */
$(window).on('load', function () { // memastikan jika website telah terload menyeluruh
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/* ======================================
                Team 
========================================= */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true, // otomatis 
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ======================================
            Progress Bar 
========================================= */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/* ======================================
            Responsice Tabs 
========================================= */
$(function () {
    $("#service-tabs").responsiveTabs({
        animation: 'slide' // atribut
    });
});

/* ======================================
                Portofolio
========================================= */


/* ======================================
                Testimonials
========================================= */

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false, // otomatis 
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* ======================================
                Stats
========================================= */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/* ======================================
                Clients
========================================= */
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false, // otomatis 
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })
})