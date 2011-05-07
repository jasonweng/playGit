function updateNav(){
	var footerY = window.innerHeight + window.pageYOffset - 47 + 'px';
	var topY = window.pageYOffset + 'px';
	$('nav').css('top', footerY);
	$('header').css('top', topY);
	$('nav,header').show();
}

$(document).ready(function(){
	
	var pageH = window.innerHeight;
	$('#mainContent').height(pageH);
	
	window.scrollTo(0, 1);
	setTimeout(function() {
		updateNav();
	}, 500);

	

	document.body.addEventListener("touchmove", function(){ $('nav,header').hide(); }, false);
	
	document.body.addEventListener("touchend", function(){ setTimeout(function(){ updateNav();}, 500); }, false);
	
	
	
	/* orientation changer ------------- */
	window.onload = changeOrient;
	window.onorientationchange = changeOrient;

	function changeOrient(){
		var orientation = window.orientation;
		$('nav,header').hide();
		updateNav();
		switch(orientation){
			case 0:
				$('body').removeClass('portrait landscape').addClass('portrait');
			break;
			case 90:
		  case -90: 
		    $('body').removeClass('portrait landscape').addClass('landscape');
		   break;
			}
		}

		
	
	$('.newAccountStep1done').tap(function(){
		$('.newAccountStep2,nav').show();
		$('nav').attr('show-time','show-time');
	});
	
	$('.select_sessioned_people_list img').tap(function(){
		
		$('.select_sessioned_people_list_info').removeClass('show');
		$(this).next().toggleClass('current').addClass('show');
		if(!($(this).next().is('.current'))){
			$(this).next().removeClass('show');
		}
		
		});
	
	$('.select_sessioned_people_list .remove_people').tap(function(){
			$('.select_sessioned_people_list_info').toggleClass('show');
			$('.select_sessioned_people_list_info').toggleClass('show');
		});
	
	
	
});










