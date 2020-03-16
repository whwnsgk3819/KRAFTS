
var $topbutton = $(".banner__wrap-language")
var $toparrow = $(".banner__wrap-arrow")
var $topen = $(".banner__wrap-bottom")
   
    $topbutton.click(function(){
    $topen.toggleClass("on"),
    $toparrow.toggleClass("on")       
})

var $rightbutton = $(".right-banner__item-language")
var $rightarrow = $(".right-banner__item-language-arrow")
var $righten = $(".right-banner__item-language-bottom")

$rightbutton.click(function(){
    $righten.toggleClass("on"),
    $rightarrow.toggleClass("on")   
})

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop >= 200){
        $('.right-banner').addClass('on');
        }else{
            $('.right-banner').removeClass('on');
        }
        })