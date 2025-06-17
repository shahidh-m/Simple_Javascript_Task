  
        const apiKey ="6a257236032fec516b68f9d06d58d3d8";
        const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const weathericon=document.querySelector(".weather-icon");


        async function checkweather(city){
            const response =await fetch(apiUrl +city+ `&appid=${apiKey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{

            
            var data=await response.json();
          

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

            if(data.weather[0].main=="Clouds"){
               weathericon.src="clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
                weathericon.src="clear.png";
            }
            else if(data.weather[0].main=="Rain"){
                weathericon.src ="rain.png";
            }
            else if(data.weather[0].main=="Drizzle"){
                weathericon.src="drizzle.png";
            }
            else if(data.weather[0].main=="Mist"){
                weathericon.src="mist.png";
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
        }
    }
        searchBtn.addEventListener("click",()=>{
            checkweather(searchBox.value);
        })
        checkweather(city);

    