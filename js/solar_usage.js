
function getData() {
    var cityname = document.getElementById("city").value;
    var temp = "";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&appid=6bfe8d2f824cb82d1425f60737c2cc4e";
    fetch(url)
    .then((res) => 
          res.json())
          .then((data) => {
            console.log(data);
            var temp = data.main.temp;
            var humidity = data.main.humidity;
            var weather = data.weather[0].description;
            document.getElementById("currentweather").innerText = "Current Temperature : "+temp+"°C";
            document.getElementById("currentHumidity").innerText = "Humidity :  "+humidity+"%";
            document.getElementById("currentPlace").innerText = "Location : "+document.getElementById("city").value;
            checkWeather(weather);
          });
          
}
function getWeather(loc) {
    var temp = "";
    str = '';
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+loc+"&units=metric&appid=6bfe8d2f824cb82d1425f60737c2cc4e";
    fetch(url)
    .then((res) => 
          res.json())
          .then((data) => {
            console.log(data);
            var temp = data.main.temp;
            var humidity = data.main.humidity;
            var weather = data.weather[0].description;
            document.getElementById("currentweather").innerText = "Current Temperature : "+temp+"°C";
            document.getElementById("currentHumidity").innerText = "Humidity :  "+humidity+"%";
            document.getElementById("currentPlace").innerText = "Location : "+document.getElementById("destName").value;

            if (weather == "overcast clouds" || weather == "mostly cloudy"|| weather == "broken clouds" || weather == "shower rain" || weather == "rain" || weather == "thunderstorm") {
                str  = "Possibility of having no sunlight<br> try to make a minimum usage of solar energy";

            } else if (weather == "partly cloudy" || weather == "few clouds" ||weather == "scattered clouds") {
                str  = "Ambient amount of sunlight!!<br>You can make good use of solar car";

            } else if (weather == "drizzle" || weather == "light rain") {
                str  = "Chances of having minimal sunlight<br> Use the solar energy carefully";

            } else if (weather == "sunny" || weather == "clear sky"){
                str  = "Its a good time for outing!!<br>You can make best use of solar car";

            }else if(weather == "mist"){
                str  = "Its a chill weather with less intensity of light";
            } 
            else if(weather == "snow" || weather == "light snow"){
                str  = "You cannot use the solar car today<br>Less possibility of getting sunlight";
            }
            else{
                str="no power";
            }
        document.getElementById("suggestion").innerHTML = str;
          });
}
function checkWeather(weather) {
    weather.toLowerCase();
    imgElement = '';
    str = '';
    if (weather == "overcast clouds" || weather == "mostly cloudy"|| weather == "broken clouds" || weather == "shower rain" || weather == "rain" || weather == "thunderstorm") {
        imgElement  = "weather-app-img/rain.png";
        str='cannot make use of solar heater';
    } else if (weather == "partly cloudy" || weather == "few clouds" ||weather == "scattered clouds") {
        imgElement  = "weather-app-img/clouds.png";
        str='less amount of sunlight<br> Make minimal use';
    } else if (weather == "drizzle" || weather == "light rain") {
        imgElement  = "weather-app-img/drizzle.png";
        str='Less light exposure!!<br> ';
    } else if (weather == "sunny" || weather == "clear sky"){
        imgElement  = "weather-app-img/clear.png";
        str='Sunny<br> You can make best use of solar heater';
    }else if(weather == "mist" || weather=="haze"){
        imgElement  = "weather-app-img/mist.png";
        str='Misty Weather <br> You can make use of solar heater';
    } 
    else if(weather == "snow" || weather == "light snow"){
        imgElement  = "weather-app-img/snow.png";
        str='Snowfall!!<br> You cannot make use of solar heater';
    }
    else{
        imgElement="weather-app-img/snow.png";
        str='7';
    }
    document.getElementById('image').innerHTML = "<img src=\""+imgElement+"\">";
    document.getElementById('desc').style.display = "inline";
    document.getElementById('desc1').style.display = "inline";
    document.getElementById("suggestion1").innerHTML = str;
}