




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
  $('.item__slider').slick('resize');
  $(this).find('.item__slider').slick('resize');
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
    

$('.item__slider').slick({
  fade: true,
  nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
  prevArrow: '<button type="button" class="slick-prev">&larr;</button>' 
});



// CYCLE 
$('.item__cycle').cycle({
  fx:     'none'
}).cycle('pause');

$('.item__overlay').hover(function(){
  $(this).find('.item__cycle').addClass('active').cycle('resume');
}, function(){
  $(this).find('.item__cycle').removeClass('active').cycle('pause');
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





var headerTop = $(".header__bg").offset().top;
var headerBottom = headerTop + $(".header__bg").height();
var headerGone = false;

//header trigger
$('.header').scroll(function() { 
    var currentScroll = $(this).scrollTop();
    
    if (currentScroll >= 1) {
        $('.container').addClass('active');
        $('.header').addClass('gone');
        $('.bar').addClass('on');
    }
    
    headerGone = true;
});


// $(function(){
//     var preventRefire = false;

//     $(document).bind("DOMMouseScroll mousewheel scroll keyup",function(event){
//         if(preventRefire) return;

//         if(event.type == "keyup"){
//             if(event.which != 38 && event.which != 33) return;
//         }

//         if(event.type == "mousewheel" || event.type == "DOMMouseScroll"){
//             //Guess scroll direction
//             var deltaY = 0;
//             if(event.wheelDelta) deltaY = event.wheelDelta;
//             if(event.detail) deltaY = -event.detail;

//             //If user mousewheeled down, don't fire, return
//             if(deltaY <= 0) return;
//         }

//         if($(document).scrollTop() == 0){
//             //Prevent event to refire within 2 seconds
//             preventRefire = true;
//             setTimeout(function(){ preventRefire = false; }, 2000);

//             $('.container').removeClass('active');
//             $('.header').removeClass('gone');
//             $('.header').scrollTop(0);
          
//             imgRandom();
//             fontRandom();
//         }
//     });
// });
        

