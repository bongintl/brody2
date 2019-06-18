/// RANDOM IMG

function imgRandom() {
    
    var last_image = localStorage.getItem("image");
    
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

    imgRandom();
    fontRandom();

});

