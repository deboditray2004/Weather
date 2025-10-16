const apiKey="7c4830e229ef7267c261335064944576";
const searchBtn=document.querySelector('button');
searchBtn.addEventListener('click',checkWeather);

async function checkWeather()
{
    try{
        const location=document.querySelector("input").value.toLowerCase();
        const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        const response=await fetch(apiUrl);
        if(!response.ok)
        {
            throw new Error();
        }
        var data=await response.json();

        document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp*10)/10}°c`;
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=`${data.main.humidity}%`;
        document.querySelector(".windSpeed").innerHTML=`${Math.round(data.wind.speed*10)/10} km/h`;

        const weatherCond=data.weather[0].main.toLowerCase();
        document.querySelector(".weather-icon").src=`images/${weatherCond}.png`;

        document.querySelector(".errorDiv").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
    catch(error)
    {
        document.querySelector(".weather").style.display="none";
        document.querySelector(".errorDiv").style.display="block";

    }
    
}
