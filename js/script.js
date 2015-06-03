$(window).load(function(){
	setInterval(function(){
		/*$('.slidebox:first').css("transform","translateX(1800px)");
		$('.slidebox:first').css("-webkit-transform","translateX(1800px)");
		$('.slidebox:first').css("-moz-transform","translateX(1800px)");
		$('.slidebox:first').css("-o-transform","translateX(1800px)"); */
		var entity=$('.slidebox img:last');
		entity.css("transform","translateX(2000px)");
		entity.css("-webkit-transform","translateX(2000px)");
		entity.css("-moz-transform","translateX(2000px)");
		entity.css("-o-transform","translateX(2000px)");
		entity.fadeOut('fast',function(){
			$(this).remove();
		});
		var src=entity.attr("src");
		$('.slidebox:first').prepend("<img src='"+src+"' >");


	},5000);


	$('.menubtn').click(function(){
		$(this).toggleClass("rotz");
		$('.wrapper').toggleClass("showmenu");
		$('nav').toggleClass("zindex10");

	});



})