
const input=document.querySelector(".inputfield");

const searchbtn=document.querySelector(".searchbtn");
    
     

async function weatherData(city) 
{
    const data=await fetch(`https://api.weatherapi.com/v1/current.json?key=9593b6de1c5a4563a44180951242410&q=${city}&aqi=no`);
    const response= await data.json();
     console.log(response);
    document.querySelector(".humiditydata").innerHTML=response.current.humidity+"%";
      document.querySelector(".winddata").innerHTML=response.current.wind_kph+ "Km/h";
      document.querySelector(".location").innerHTML=response.location.name;
     document.querySelector(".temp").innerHTML=Math.floor(response.current.temp_c)+"°c";
     document.querySelector(".region").innerHTML=response.location.region;
     let condition=response.current.condition.text;
     const clouds="./images/clouds.png";
     const clear="./images/clear.png";
     const drizzle="./images/drizzle.png";
     const mist="./images/mist.png";
     const rain="./images/rain.png";
     const snow="./images/snow.png";
     


     
     if(condition==="Sunny"){
        document.querySelector(".img").setAttribute("src",clear);
     }else if(condition==="Clouds"){
        document.querySelector(".img").setAttribute("src",clouds);

     }else if(condition==="Clear"){
        document.querySelector(".img").setAttribute("src",mist);

     }
     
    
    
     
     console.log(condition);


}


searchbtn.addEventListener("click",()=>{
    weatherData(input.value);
    

})
  