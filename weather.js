

//var input = document.querySelector('.userInput');
var main = document.querySelector('#cityName');
var temperature = document.querySelector('.temperature');
var weather = document.querySelector('.description');
var button = document.querySelector('.submit');
var zip = document.querySelector('.zipcode');
var time = document.querySelector('.time');


button.addEventListener('click', function(name){
  var input = document.getElementById('userInput').value.trim();
  console.log(input);

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=1fe3341f2f29bd0cda3bcdc84b8acdcc`)

.then(response => 
	{
		return response.json();
	})

.then(data => {
  var zipcodeValue = data['zip'];
  var temperatureValue = data['main']['temp'];
  var nameValue = data['name'];
  var weatherValue = data['weather'][0]['description'];
  var timeValue = [moment().format("h:mm a")];

  main.innerHTML = nameValue;
  weather.innerHTML = "Weather: " + weatherValue;
  temperature.innerHTML = "Temperature: " + temperatureValue;
  zip.innerHTML = "Zip Code: " + zipcodeValue;
  time.innerHTML = "Time: " + timeValue;
  input.value ="";


})
})

//.catch(err => alert("Wrong zip code!"));


