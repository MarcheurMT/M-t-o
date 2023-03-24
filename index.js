let form = document.querySelector('form');
let div = document.querySelector('div');
let weatherdiv= document.querySelector('weather');


form.addEventListener('submit', e=>{
    e.preventDefault();
    
    let ville = document.querySelector('#inputCity');

fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ville.value}?unitGroup=metric&key=WASFC7B5WVCEY4MDKVEWDR3N6&contentType=json`)
    .then((data) => data.json())
    .then(data2 => afficher(data2))
.catch((err) => console.log('Erreur : ' + err));})

function afficher(data){
    console.log(data);
    document.querySelector('#city').innerHTML= data.currentConditions.conditions;
    document.querySelector('#temp').innerHTML= data.currentConditions.temp;
    document.querySelector('#humidity').innerHTML= data.currentConditions.humidity;
    document.querySelector('#wind').innerHTML= data.currentConditions.windspeed;
}