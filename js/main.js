




/// RANDOM IMG

function imgRandom() {
    
    // get local storage
    var last_image = localStorage.getItem("image");
    

    // get all imgs
    var header_images = $(".header__bg").data("img");
    var random_number = Math.round(Math.random() * (header_images.length-1));

    if (random_number == last_image) {

        var random_number = random_number + 1;

        
        if (random_number = header_images.length-1) {
            random_number = 0;
        }
    }

    var random_img = header_images[random_number];
    
  
    $('.header__bg').css('background-image','url("' + random_img + '")');
    
    localStorage.setItem("image", random_number);

    
}


/// RANDOM TYPEFACE
var font_classes = ["tccc","c4","calvert-brody","samsung-one"];

function fontRandom() {
    // get local storage
    var last_font = localStorage.getItem("image");


    var random_font = Math.round(Math.random() * (font_classes.length-1));

    if (random_font == last_font) {

        var random_font = random_font + 1;

        
        if (random_font = font_classes.length-1) {
            random_font = 0;
        }
    }


    // reset             
    $(".header").attr('class', 'header'); 
    $(".header__footnote p").removeClass("loaded");

    // do the random             
    $(".header").addClass(font_classes[random_font]);
    var font_class = font_classes[random_font];

    $(".header__footnote").find("." + font_class + "").addClass("loaded")

    // fade in text
    setTimeout(function () {
        $('.header__text').addClass('header__text--loaded');
    }, 700);
    
    localStorage.setItem("font", random_font);

}




$('document').ready(function() {
    
 
    
        
// MASONRY 
        
    var $grid = $('.grid').isotope({
      layoutMode: 'masonry',
      itemSelector: '.item',
      masonry: {
        columnWidth: '.item--sizer'
      },
      getSortData: {
        order: '[id] parseInt'
      },
      sortBy: 'order'
    });

    var $items = $('.item');
    $items.each( function( i ) {
      $(this).attr( 'id', i );
    })
    
    $grid.on( 'click', '.item', function(e) {

  
        if ( $(this).is('.item--large') ) {
            console.log('big one')
        } else {
            $('.ba').each(function(){
                var $this = $(this);

                var slides = $this.find(".ba__slide");

                for (i = 0; i < slides.length; i++) {
                  slides[i].style.visibility = "hidden"; 
                }
                slides[0].style.visibility = "visible";
            

            })
        }

    
      var clickedIdx = $items.index( $( this ) );
      var max = $items.length - 3;
      
      $items.each( function ( i ) {
        var $item = $( this );
        if ( i === clickedIdx ) {
          $item.addClass('item--large');
          $item.attr( 'id', Math.min( i, max ) );
        } else {
          $item.removeClass('item--large');
          
          if ( clickedIdx >= max && i >= max ) {
            $item.attr( 'id', i + 1 );
          } else {
            $item.attr( 'id', i );
          }
        }
      });
      

      $grid.isotope( 'updateSortData' );
      $grid.isotope();
      
    });
        




    // load random stuff 
    imgRandom();
    fontRandom();


    

    
    //  B links

    $(".header__logo").click(function() {
        $('.container').addClass('active');
        $('.header').addClass('gone');
        $('.bar').addClass('on');
    });
    
    $(".footer__logo, .bar__logo").click(function() {
        $('.container').removeClass('active');
        $('.header').removeClass('gone');
        $('.bar').removeClass('on');
        $('.header').scrollTop(0);
  
        $('html, body').animate({ scrollTop: 0 }, 1000, function() {
            // imgRandom();
            // fontRandom();
        });
        
    });


});





var barTop = $(".bar").offset().top;
var barBottom = barTop + $(".bar").height();

//header trigger
$(document).scroll(function() { 
    var currentScroll = $(this).scrollTop();

    if (currentScroll >= barTop) {
        $('.bar').addClass('fixed');
    }
    
    if (currentScroll < barTop) {
        $('.bar').removeClass('fixed');
    }
    
    if(currentScroll > 1) {
        $('.bar__down').addClass('hidden');
    }
    
});



    
$(".bar__down").click(function() {
    console.log('clicked');
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".container").offset().top
    }, 1000);
});




// get all ba
var $ba = $('.ba');

$ba.each(function(){
  var $this = $(this);
  
  var slideIndex = 1;
  showSlides(slideIndex);

  $(".ba__arrow--prev", $this).click(function(){ plusSlides(-1); });
  $(".ba__arrow--next", $this).click(function(){ plusSlides(1); });

  
  
  
  $this.find( ".ba__overlay" ).on( "mouseenter", function(){
    interval = setInterval(hoverAnim, 1000);
  });
  
  $this.find( ".ba__overlay" ).on( "mouseleave", function(){
    clearInterval(interval);
    
    // start back at the first one
    slideIndex = 1;
    showSlides(slideIndex);
  });
  
  $this.find( ".ba__overlay" ).on( "click", function(){
    $ba.removeClass('open');
    $('.ba__overlay').show();
    
    $this.addClass('open');
    $(this).hide();
    
   
    clearInterval(interval);
    
    
  });
  
  
  

  function hoverAnim() {
     plusSlides(1); 
  }
  
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  

  function showSlides(n) {
    var i;
    var slides = $(".ba__slide", $this);
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "hidden"; 
    }

    slides[slideIndex-1].style.visibility = "visible"; 
  }
});



$(function() {
    $('.lazy').Lazy();
});
     