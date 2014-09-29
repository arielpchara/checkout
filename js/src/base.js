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

	$.publish('/section/change/loc');

	/*
	var inputsText = $("input[type=text]");
	inputsText.focus(function(){
		$("header>.nav").addClass('keyboard');
	}).blur(function(){
		$("header>.nav").removeClass('keyboard');
	}).keyup(function(e){
		var next = inputsText.eq(inputsText.index(this)+1);
		if( e.keyCode == 13 ){			
			console.log(next);
			if( next ){
				next.focus();
			}else{
				$(document).focus();
			}
		}
	});
	*/

	$(".field.cep input[type=text]").keyup(function(){

	});

});