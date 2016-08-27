$(document).ready(function(){

$("#fixedSlide").hide();
 var target;
$(".nav li a").on("click",scrol);
    function scrol() {
    	$("#fixedSlide").fadeIn('slow');
        target=$(this).attr("id");

$("body").stop().animate({"scrollTop":$(target).offset().top},2000,"swing");
    
}

$("#fixedSlide").on("click",scrol2);

function scrol2() {
	$("body").stop().animate({"scrollTop":$("#header").offset().top},1000,"swing");
	$("#fixedSlide").fadeOut('slow');

}
    
// $("window").scroll(function(){
// 	$("#fixedSlide").fadeIn('slow');
// });

 $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("#fixedSlide").fadeIn('slow');
    } else {
      $("#fixedSlide").fadeOut('1000');
    }
  });


    });