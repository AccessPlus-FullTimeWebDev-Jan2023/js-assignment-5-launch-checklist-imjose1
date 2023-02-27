// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div= document.getElementById("missionTarget");
        div.innerHTML=` <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    let numberInp= Number(testInput);
   if(testInput === "" ){
    return "Empty";
   }else if(isNaN(numberInp)){
    return "Not a Number";
   }else if(isNaN(numberInp) === false){
    return "Is a Number";
   }

}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let pilotStatus = document.getElementById("pilotStatus");
        let coPilotStatus =document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus= document.getElementById("launchStatus");
        let cargoStatus= document.getElementById("cargoStatus");

       if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
        alert("All fields are required!");
       }else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ){
        alert("Make sure to enter valid information for each field!");
       }else{
        list.style.visibility="visible";
        pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;
        coPilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
            if(fuelLevel < 10000 && cargoLevel <= 10000){
                launchStatus.style.color ="#C7254E";
                launchStatus.innerHTML =`Shuttle Not Ready for Launch`;
                fuelStatus.innerHTML =`Fuel level too low for launch`;
                cargoStatus.innerHTML =`Cargo mass low enough for launch`;
            }else if(fuelLevel >= 10000 && cargoLevel > 10000){
                launchStatus.style.color ="#C7254E";
                launchStatus.innerHTML =`Shuttle Not Ready for Launch`;
                fuelStatus.innerHTML =`Fuel level high enough for launch`;
                cargoStatus.innerHTML=`Cargo mass too heavy for launch`;
            }else if(fuelLevel < 10000 && cargoLevel > 10000){
                launchStatus.style.color ="#C7254E";
                launchStatus.innerHTML =`Shuttle Not Ready for Launch`;
                fuelStatus.innerHTML =`Fuel level too low for launch`;
                cargoStatus.innerHTML=`Cargo mass too heavy for launch`;
            }else{
                launchStatus.style.color ="#419F6A";
                launchStatus.innerHTML =`Shuttle is Ready for Launch`;
                fuelStatus.innerHTML =`Fuel level high enough for launch`;
                cargoStatus.innerHTML =`Cargo mass low enough for launch`;
            }
       }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();

        });

    return planetsReturned;
    
}


function pickPlanet(planets) {
    let index = planets[Math.floor(Math.random() * planets.length)];
    return index;

}

module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
