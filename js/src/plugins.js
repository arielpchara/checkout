(function($){

	$.fn.fullHeight = function(){
		var e = $(this),
			height = $(document).height();
		e.height(height);
	};

	$.fn.sectionPosition = function(){
		var selected = $(this),
			width = $(document).width();

		selected.each(function(){
			var e = $(this),
				index = e.index(),
				name = e.attr('name'),
				transform = "translate("+ (index*100) +"%,0)",
				css =  {'-webkit-transform': transform,
						'-moz-transform': 	 transform,
						'-ms-transform': 	 transform,
						'-o-transform': 	 transform,
						'transform':  		 transform};
				e.css(css);
			var change = function(params){
				selected.parent().scrollTo(e,300);
				selected.removeClass('visible');
				e.addClass('visible');
				$("header .logo .title").addClass('hide').removeClass('show');
				setTimeout(function(title){
					$("header .logo .title").html(title);
					$("header .logo .title").addClass('show').removeClass('hide');
				},200,e.attr('title'));

			};
			$.subscribe('/section/change/'+name,change);
		});
	};

	$.fn.sectionOnClick = function(){
		var links = $(this);
		links.each(function(){
			var	a = $(this),
			 	hash = a.attr('href');
			$.subscribe('/section/change/'+hash.replace('#',''),function(){
				links.removeClass("active");
				a.addClass('active');
			});
			$(this).click(function(){
				sec.change(hash);
				return false;
			});
		});
	};

})(jQuery);


var sec = (function(){
	var o = new Object();
	o.init = function(){
		window.addEventListener('hashchange',o.hash,false);
		window.addEventListener('load',o.hash,false);
	};
	o.change = function(hash){
		name = hash.replace('#','');
		var r = $.publish('/section/change/'+name,{});
	};
	o.hash = function(e){
		var hash = location.hash;
		o.change(hash);
	}
	return o;
})();