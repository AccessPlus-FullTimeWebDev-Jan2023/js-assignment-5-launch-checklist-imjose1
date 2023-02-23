// Write your JavaScript code here!

const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    let PilotName = document.querySelector("input[ name=pilotName]");
    let CoPilotNam = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("inpu[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]")
    
    
    
     formSubmission(document,list ,PilotName,CoPilotNam,fuel,cargoLevel)
  });
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   




   
});
