// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
                con
   */

}

function validateInput(testInput) {
    let numberInp= Number(testInput);
   if(testInput === "" ){
    return "Empty"
   }else if(isNaN(numberInp)){
    return "Not a Number"
   }else if(isNaN(numberInp) === false){
    return "Is a Number"
   }

}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let pilotStatus = document.getElementById("pilotStatus");
        let coPilotStatus =document.getElementById("copilotStatus")
        let fuelStatus = document.getElementById("fuelStatus")
        let launchStatus= document.getElementById("launchStatus")
        let cargoStatus= document.getElementById("cargoStatus")

       if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
        alert("All fields are required!");
       }else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ){
        alert("Make sure to enter valid information for each field!")
       }else{
        faultyItems.style.visibility="visible";
        pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;
        coPilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
            if(fuelLevel < 10000 ){
                launchStatus.style.color ="red";
                launchStatus.innerHTML =`Shuttle Not Ready for Launch`;
                faultyItems.style.visibility="visible";
                fuelStatus.innerHTML =`Fuel level too low for launch`

            }else if(cargoLevel > 10000 ){
                launchStatus.style.color ="red";
                launchStatus.innerHTML =`Shuttle Not Ready for Launch`;
                faultyItems.style.visibility="visible";
                cargoStatus.innerHTML=`Cargo mass too heavy for launch`
            }else{
                launchStatus.style.color ="green";
                launchStatus.innerHTML =`Shuttle is ready for launch`;
            }
       }
       
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

        });

    return planetsReturned;
    
}


function pickPlanet(planets) {
}

module.exports = {
    addDestinationInfo: addDestinationInfo,
    validateInput: validateInput,
    formSubmission: formSubmission,
    pickPlanet: pickPlanet,
    myFetch: myFetch
}

// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
