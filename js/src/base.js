$(function(){
	var menu = $("aside.cart").click(function(){
		menu.toggleClass('show');
	});
	$("aside.cart .icon a").click(function(){
		menu.toggleClass('show'); return false; });
	
	$(".logo").click(function(){
		$(".notification").toggleClass("show");
	});
	
	$(".container>section").sectionPosition();

	$(".container").swipe({
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          console.log("You swiped");
        },
        threshold:0
     });

	//sec.init();
	$("header ul li a").sectionOnClick();

});