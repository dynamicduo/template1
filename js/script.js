$(window).load(function(){
	setInterval(function(){
		/*$('.slidebox:first').css("transform","translateX(1800px)");
		$('.slidebox:first').css("-webkit-transform","translateX(1800px)");
		$('.slidebox:first').css("-moz-transform","translateX(1800px)");
		$('.slidebox:first').css("-o-transform","translateX(1800px)"); */
		var entity=$('.slidebox img:last');
		entity.fadeOut('fast',function(){
			$(this).remove();
		});
		var src=entity.attr("src");
		$('.slidebox:first').prepend("<img src='"+src+"' >");


	},5000);



})