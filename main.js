$(document).ready(function(){
    $(".icon").each(function () {
        console.log("In Icon");
        $(this).click(function () {
            console.log("Clicked Image DIV");
            $(this).find("div.w-image").addClass("front");
            $(this).find("div.w-text").removeClass("back");
            $(this).find("div.w-text").addClass("back-flip");
        });
        $(this).mouseleave(function () {
            $(this).find("div.w-image").removeClass("front");
            $(this).find("div.w-text").addClass("back");
        })
    });

