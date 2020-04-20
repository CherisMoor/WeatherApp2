

//var input = document.querySelector('.userInput');

var main = document.querySelector('#cityName');
var temperature = document.querySelector('.temperature');
var weather = document.querySelector('.description');
var button = document.querySelector('.submit');
var zip = document.querySelector('.zipcode');
var time = document.querySelector('.time');
var date = document.querySelector('.date');
//var icon = document.querySelector('.icon');


function degreesKtoF(num) {
    return Math.floor( (num - 273) * (9/5) + 32)
};


button.addEventListener('click', function(){

  var input = document.getElementById('userInput').value.trim();
  //console.log(input);

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=1fe3341f2f29bd0cda3bcdc84b8acdcc`)

.then(response => 
	{
		return response.json();
	})

.then(data => {
  var zipcodeValue = input;
  var temperatureValue = degreesKtoF(data['main']['temp']);
  var nameValue = data['name'];
  var weatherValue = data['weather'][0]['description'];
//  var timeValue = ['timezone']
//  var sec = 1587331994;
//  var date = new Date(sec * 1000);
  var lon = data.coord.lon;
  var lat = data.coord.lat;
//  var date = moment().utcOffset(timeValue / 60).format("h:mm a z");
//  console.log(date, timestr);

//  $(".time").html(timestr);
//  $(".date").html(date);
$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=1fe3341f2f29bd0cda3bcdc84b8acdcc&units=imperial`, ((time)=>{

//grabs the timezone of the lon and lat and formats it using the moment library then displays on the browser
  let datetime= moment().tz(time.timezone).format('dddd MMMM Do YYYY, h:mm a z');
$('#displayMoment').text(datetime);
}))


  function getTime(time) {
  //converts time based on utc offset, which api provides
  return moment().utcOffset(time / 60).format("h:mm a z")
}
  var timeValue = getTime();

  //var utcTime = getTime();
  //4-hours in milliseconds..  var actTime = 1.44e+7;
  //var timeValue = utcTime - actTime;
//  var dateValue = $(".date").html(date);

  //var weatherIcon = data['weather'][0].icon;


  //icon.innerHTML = weatherIcon;
  main.innerHTML = nameValue;
  weather.innerHTML = "Weather: " + weatherValue;
  temperature.innerHTML = "Temperature: " + temperatureValue + " °F";
  zip.innerHTML = "Zip Code: " + zipcodeValue;
  time.innerHTML = "Time: " + timeValue;
//  date.innerHTML = "Date: " + dateValue;
  input.value ="";


});
});

.catch(err => alert("Wrong zip code!"));
//$(".icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");

