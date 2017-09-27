var btn = document.getElementById('getLocation');
btn.addEventListener('click', getLocation);

function getLocation() {
	navigator.geolocation.getCurrentPosition(function(location) {
  		var lat = location.coords.latitude;
  		var long = location.coords.longitude;
  		// console.log(location.coords.accuracy);
  		printLocation(lat, long);
	});
}
function printLocation(lat, long) {
	console.log(lat);
	console.log(long);
	// show.innerHTML = "<h1>latitude = "  + lat + "</h1>";
	getData(lat, long);
}

function getData(lat, long) {
	var url = "https://fcc-weather-api.glitch.me/api/current?lat=" 
			+ lat + "&lon=" + long;
	fetch(url)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			// console.log(data);
			console.log(data.weather[0].main + "\n" + data.main.temp
				+ "\n" + data.sys.country+ "\n" + data.name);
			showData(data.weather[0].main,data.main.temp,data.sys.country,data.name);
		})
		.catch(function(){
			console.log("Something has gone terribly wrong.")
		});
}

function showData(weather, temp, country, place) {
	hideButton();
	var show = document.getElementById('show');
	show.innerHTML = '<h1>'  + place + ',' + country+ '</h1>\
						<h2>' + temp + '<sup>o</sup> C<h2>\
						<h2>' + weather +'</h2>';
	}
	
function hideButton() {
	btn.style.visibility = 'hidden';
}