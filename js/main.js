
 
        
        TweenMax.set(".class-description", {autoAlpha:0});
          TweenMax.set(".container", {autoAlpha:0});
          TweenMax.set(".class-image", {autoAlpha:0});
          
var ima = $(".class-image");
var descri = $(".class-description");
var item = $(".item");
var overlay = $(".overlay");
var contain = $(".container");

$(".item").on("click", function(){
    TweenMax.fromTo(contain, 1, {x:-200, autoAlpha:0}, {x: 0, autoAlpha: 1});
   TweenMax.fromTo(descri, 1, {x:300, autoAlpha:0}, {x: 0, autoAlpha: 1});
    TweenMax.fromTo(ima, 1, {x:-200, autoAlpha:0}, {x: 0, autoAlpha: 1});
});
$(".close").on("click", function(){
    TweenMax.to(contain, 1, {autoAlpha: 0});
   TweenMax.to(descri, 1, {x: 200, autoAlpha: 0});
    TweenMax.to(ima, 1, {x: -200, autoAlpha: 0});
});

$('.overlay img').on('click',function(e) {

    
    //or, if you want to load it not as a background:
    $('.cont').html('<img src="'+$(this).attr('data-full')+'" />');
});
   


    
    







