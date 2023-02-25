//  const { myFetch } = require("./scriptHelper");
// const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
  
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, randomPlanet.name,randomPlanet.diameter,randomPlanet.star,randomPlanet.distance,randomPlanet.moons,randomPlanet.image)
        })
        

        
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault()
    
    let PilotName = document.querySelector("input[ name=pilotName]");
    let pilot = PilotName.value

    let CoPilotNam = document.querySelector("input[name=copilotName]");
    let copilot =CoPilotNam.value

    let fuel = document.querySelector("input[name=fuelLevel]");
    let fuelLevel =fuel.value

    let cargoL = document.querySelector("input[name=cargoMass]")
    let cargoLevel =cargoL.value
    
    
     formSubmission(document,null ,pilot,copilot,fuelLevel,cargoLevel)
  });
  
   
});
