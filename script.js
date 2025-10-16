const searchBtn=document.querySelector('button');
searchBtn.addEventListener('click',checkWeather);
function getTime(utcOffset)
{
    return new Date(new Date().getTime() + new Date().getTimezoneOffset()*60000 + utcOffset).toLocaleTimeString();
}
async function checkWeather()
{
    try{
        const location=document.querySelector("input").value.toLowerCase();
        const apiUrl=`/.netlify/functions/getWeather?city=${location}`;
        const response=await fetch(apiUrl);
        if(!response.ok)
        {
            throw new Error();
        }
        var data=await response.json();

        console.log(data);

        document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp*10)/10}°c`;
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".time").innerHTML=getTime(parseInt(data.timezone)*1000);
        document.querySelector(".humidity").innerHTML=`${data.main.humidity}%`;
        document.querySelector(".windSpeed").innerHTML=`${Math.round(data.wind.speed*10)/10} km/h`;

        const weatherIcon=data.weather[0].icon;
        document.querySelector(".weather-icon").src=`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`;

        document.querySelector(".errorDiv").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
    catch(error)
    {
        document.querySelector(".weather").style.display="none";
        document.querySelector(".errorDiv").style.display="block";

    }
    
}
