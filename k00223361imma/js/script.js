$(document).ready(function($){
	$(window).scroll(function() {
		$scroll = $(document).scrollTop();
		console.log($scroll);

	  	if ($(document).scrollTop() > 50) {
	    	$('.navbar').addClass('shrink');
	  	} else {
	    	$('.navbar').removeClass('shrink');
	  	}
	});
});



