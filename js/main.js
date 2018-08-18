/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET',
'http://api.wunderground.com/api/906d845946a8f0c1/conditions/q/CA/San_Francisco.json', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);


    } //end if
    document.getElementById("location").innerHTML = cObj.current_observation.display_location.full;
    document.getElementById("weather").innerHTML = cObj.current_observation.weather;
    document.getElementById("temperature").innerHTML = cObj.current_observation.temp_c;

}; //end function



// GET THE FORECARST
weatherForecast.open('GET',
'http://api.wunderground.com/api/906d845946a8f0c1/forecast/q/CA/San_Francisco.json', true);
weatherForecast.responseType = 'text';
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
  }//end if
  //DAY 1
// descreption
document.getElementById("desc").innerHTML = fObj.forecast.txt_forecast.forecastday[0].fcttext;
//day of week
document.getElementById("r1c1").innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
//image
var imagePath = fObj.forecast.simpleforecast.forecastday[1].icon_url;
document.getElementById("r1c2").src = imagePath;
//high
document.getElementById("r1c3").innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.celsius+'°';
//low
document.getElementById("r1c4").innerHTML = fObj.forecast.simpleforecast.forecastday[1].low.celsius+'°';

//DAY 2

//day of week
document.getElementById("r2c1").innerHTML = fObj.forecast.simpleforecast.forecastday[2].date.weekday;
//image
var imagePath = fObj.forecast.simpleforecast.forecastday[2].icon_url;
document.getElementById("r2c2").src = imagePath;
//high
document.getElementById("r2c3").innerHTML = fObj.forecast.simpleforecast.forecastday[2].high.celsius+'°';
//low
document.getElementById("r2c4").innerHTML = fObj.forecast.simpleforecast.forecastday[2].low.celsius+'°';


//DAY 3

//day of week
document.getElementById("r3c1").innerHTML = fObj.forecast.simpleforecast.forecastday[3].date.weekday;
//image
var imagePath = fObj.forecast.simpleforecast.forecastday[3].icon_url;
document.getElementById("r3c2").src = imagePath;
//high
document.getElementById("r3c3").innerHTML = fObj.forecast.simpleforecast.forecastday[3].high.celsius+'°';
//low
document.getElementById("r3c4").innerHTML = fObj.forecast.simpleforecast.forecastday[3].low.celsius+'°';

}; //end function

//get zip code
function toZip(){
  var zipCode = document.getElementById("zip").value;
  console.log(zipCode);
}
