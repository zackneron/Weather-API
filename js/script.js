var API_KEY = "53f9d8e4213222cf517d86dc406d67fc";

$(function(){

	var location;

	$.getJSON('http://ipinfo.io', function(d){
	  console.log("Below are the data for your weather.....");
	  location = d.loc.split(",");
	  console.log(location);

	  $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' 
	  	+ location[0] + '&lon=' +location[1]  + '&appid='+ API_KEY, function(weatherdata){
	  		console.log("User data ", weatherdata);

	  		var userCurrentLoc = weatherdata.name;
	  		var userCurrentWeather = weatherdata.weather[0].description;
	  		var userCurrentTemp = weatherdata.main.temp;
	  		var highTemp = weatherdata.main.temp_max;
	  		var lowTemp = weatherdata.main.temp_min; 

	  		$('#userCurrentLoc').html("You are currently in: " + userCurrentLoc);
	  		$('#userCurrentTemp').html(userCurrentTemp);
	  		$('#userCurrentWeather').html(userCurrentWeather);
	  		$('#highTemp').html(highTemp);
	  		$('#lowTemp').html(lowTemp);
	  	})

	});

	$('#reload').click(function() {
	    window.location.reload();
	});

});