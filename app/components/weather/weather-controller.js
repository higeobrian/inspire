function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
		
	weatherService.getWeather(function(weather){
		console.log(weather);
		var tempF = Math.floor((9/5)*(weather.main.temp)-459.67)
		var TempC = Math.round(weather.main.temp - 273.15)
		var template = `
		<h4>Temperature: ${tempF}F°/${TempC}C°</h4>
		<h5>City: ${weather.name}</h5>
		<h6>Humidity: ${weather.main.humidity}<h6>
		
		`
		document.getElementById('weather').innerHTML = template
	})
		//What can you do with this weather object?

}
