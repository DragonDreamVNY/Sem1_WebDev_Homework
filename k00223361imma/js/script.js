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

//=========================================
// JavaScript Cookie creation and retreival.
//=========================================
$('document').ready(init);

function init () {
	console.log('Running Init');
	/*reflectCode();*/
	showInitialVals();	
	/*incrementVisitCount();*/
	$('#subButton').click(formToCookie);
}

function setCookie (cookieKey, cookieValue, lifeSpan, path) {
	// Default constructor for creating a cookie.  

	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+lifeSpan);
	var path = ';path=' + path + ';expires=';
	
	document.cookie = cookieKey + '=' + cookieValue + ';path=/;expires=' + expireDate.toGMTString();

}

function getCookie (cookieKey) {

	var cookieValue = null;
	var myCookie = document.cookie;
	var subStrStart = myCookie.indexOf(" " + cookieKey + "=");
	// the above line will determine where the cookieKey value is in the cookie strings

	if (subStrStart == -1) {
		subStrStart = myCookie.indexOf(cookieKey + "=");
		// this is a second try at finding the key value by removing the blank at the start

	}

	if (subStrStart == -1) {
	    cookieValue = null;
	    console.error('Cookie Key not found!')
	  // if the key does not exist, return null
	} else {
	  	subStrStart = myCookie.indexOf("=", subStrStart) + 1;
	  	var subStrEnd = myCookie.indexOf(";", subStrStart);
	  	if (subStrEnd == -1) { 
			subStrEnd = myCookie.length;
		}
		cookieValue = unescape(myCookie.substring(subStrStart,subStrEnd));
	}
	console.log('Recovered Cookie Value is: '  + cookieValue);
	return cookieValue;
}


function formToCookie () {
	// First we get the form values from the HTML Form
	
	var name = $('#name').val();
	var email = $('#userEmail').val();
	var phone = $('#phone').val();
	var message = $('#yourMessage').strings();
	

	setCookie('name', name, 12, '/');
	setCookie('email', email, 12, '/');
	setCookie('phone', phone, 12, '/');
	setCookie('message', message, 12, '/');

    var pName = createNewElement(
    	'p', 
    	'text-primary', 
    	'attachedCookieNameID', 
    	'Entered Name value is: ' + name + '.'
    );

    var pEmail = createNewElement(
    	'p', 
    	'text-primary', 
    	'attachedCookieEmailID', 
    	'Entered Email value is: ' + email + '.'
    );

    if ($('#attachedCookieNameID').length > 0){
    	console.log('name exists')
    	$('#attachedCookieNameID').text('Entered Name value is: ' + name + '.');
    } else {
     	$('#cookieVals').append(pName);   	
    }

    if ($('#attachedCookieEmailID').length > 0){
    	console.log('email exists')
    	$('#attachedCookieEmailID').text('Entered Email value is: ' + email + '.')
    } else {
     	$('#cookieVals').append(pEmail);   	
    }
}

/*function incrementVisitCount () {
	var numVisits = 0; // initalise variable
	
	if (getCookie('visitCount') === null){
		setCookie('visitCount', '0', 12, '/')
	    $('#cookieVals').children('h3').append('This is your first visit to this site.')
	} else {
		numVisits = getCookie('visitCount');
		numVisits ++;
		setCookie('visitCount', numVisits, 12, '/')			
	    $('#cookieVals').children('h3').append('You have been here ' + numVisits +' times before.')
	}
}*/



function showInitialVals () {
	
	if (getCookie('name') === null) {
	    var pName = createNewElement(
	    	'p',
	    	'text-primary',
	    	'attachedCookieNameID',
	    	'No Previous Name Cookie'
	    );
	    $('#cookieVals').append(pName);

	} else {
		var cookieName = getCookie('name');
	    var pName = createNewElement(
	    	'p',
	    	'text-primary',
	    	'attachedCookieNameID',
	    	'Cookie Name value is: ' + cookieName + '.'
	    );
	    $('#cookieVals').append(pName);

	} 

	if (getCookie('email') === null) {
	    var pEmail = createNewElement(
	    	'p',
	    	'text-primary',
	    	'attachedCookieEmailID',
	    	'No Previous Email Cookie'
	    );
	    $('#cookieVals').append(pEmail);

	} else {
		var cookieEmail = getCookie('email');
	    var pEmail = createNewElement(
	    	'p',
	    	'text-primary',
	    	'attachedCookieEmailID',
	    	'Cookie Email value is: ' + cookieEmail + '.'
	    );
	    $('#cookieVals').append(pEmail);

	} 
}

function createNewElement(tag, classname, id, text){
	var element = document.createElement(tag);
	element.className = classname;
	element.id = id;
	var text = document.createTextNode(text);
	element.appendChild(text);
	return element;
}

// The function below is to reflect the contents of the javascript file back to the HTML Page
/*function reflectCode(){
	$.get('js/JSCookieJQuery.js', function(data) {
	   $('#codeExample').text(data);
	}, 'text');
}*/

