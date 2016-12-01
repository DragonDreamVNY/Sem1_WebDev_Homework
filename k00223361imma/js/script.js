//=========================================
// Scroll and Shrink
//=========================================
$(document).ready(function($){
	//scroll
	$(window).scroll(function() {
		$scroll = $(document).scrollTop();
		//console.log($scroll);

	  	if ($(document).scrollTop() > 50) {
	    	$('.navbar-default').addClass('shrink');
	    	$('.brand').addClass('shrink');
/*	    	$('#navScrollMe').addClass('shrink');
	    	$('.navItems a').addClass('shrink');*/

	    	
	  	} else {
	    	$('.navbar-default').removeClass('shrink');
	    	$('.brand').removeClass('shrink');
/*	    	$('#navScrollMe').removeClass('shrink');
	    	$('.navItems').removeClass('shrink');*/
	  	}
	});
});



//=========================================
// carousel
//=========================================
$('.carousel').carousel({
    		interval: 2000,
    		wrap: true
    	});


//=========================================
// modal
//=========================================

//when modal opens
$('#contactModal').on('shown.bs.modal', function (e) {
  $("#pageContent").css({ opacity: 0.5 });
})

//when modal closes
$('#contactModal').on('hidden.bs.modal', function (e) {
  $("#pageContent").css({ opacity: 1 });
})









/*
	//GoogleMaps
	$('document').ready(initMap);
	function initMap(location) {
		var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coordslongtitude);
		
		var mapOptions = {
			center: new google.maps.LatLng(53.343096, -6.300037),
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}; //centred at IMMA location

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		
		var marker = new google.maps.Marker({
			position: currentLocation,
			map: map
		}); //places marker at our current position
		if (navigator.geoLocation){ 
			console.log(location); 
			navigator.geoLocation.getCurrentPosition(initMap);	
		} else (x.innerHTML="Geolocation is not supported by this browser.";)

		function showPosition(position){
			x.innerHTML="Latitude: " + position.coords.latitude +
				"<br>Longitude: " + position.coords.longitude;
		} //end showPosition
	} //end initMap 
*/



//GoogleMaps

/*	function initMap(){
		var mapOptions = {
			center: new google.maps.LatLng(53.343096, -6.300037),
			zoom: 12,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}; //centred at IMMA location
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	} //end GoogleMaps
google.maps.event.addDomListener(window, "load", initMap);*/





