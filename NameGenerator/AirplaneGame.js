
//A RANDOM NAME GENERATOR FOR GAME PRUPOSES


var pilotNumber = 12; //number of names to generate

// {} is shorthand for creating an empty object. ASSOCIATIVE ARRAY 
// [] is shorthand for creating an empty array, it is a special form of an object that stores sequences of values.



var oKill = { date:"", plane:"" };

var oMedal = { date:"", type:"" };

var oPilot = { pilotId: -1, 
              rank: "",
              firstName: "", 
              lastName: "", 
              assigPlaneId: -1, 
              victories:[oKill], 
              medals:[oMedal]
             };

var oAirplane = { airplaneId: -1,
                 airplaneType: -1,
                 situation: -1
                };

var oSquadron = { name: "-",
                 pilots:[oPilot],
                 airplanes:[oAirplane]
               };

//this is an array of mames []
var pilFirstNameList = ["Heinz","Gunther","Jacobs", "Erich", "Josef", "Alfred",
                        "Ernst","Werner","Paul", "Karl", "Heinrich", "Rudolph",
                        "Lothar","Bruno","Peter", "Kurt", "Theodor", "Gotthard",
                        "Julius","Gustav","Emil", "Max", "Hermann", "Hans",
                        "Ulrich","Arthur","Harald", "Erwin", "Oskar", "Fritz",
                        "Dietrich","Reinhold","Stefan","Willi","Leopold","Hugo",
                        "Bertram","Rudger" ,"Christian","Robert","Sebastian","Joachim",
                        "Johannes", "Otto", "Gehardt", "Michael", "Walter", "Manfred"]; 
                        
var pilLastNameList = ["Barkhorn", "Richthofen", "Fuchs", "Solomon", "Hall", "Boelcke",
                       "Becker","Meyar","Boheme","Dostler","Preuss","Frankl",
                       "Altmeier","Adam","Schmidt","Reinhard","Friedrichs","Donhauser",
                       "Fieseler","Wintgens","Hess","Ray","Rolfes","Baldamus",
                       "Marwitz","Hanstein","Dossenbach","Weiss","Heldmann","Hossmann",
                       "Buddecke","Joerke","Collin","Buetner","Straehle","Schneider",
                       "Heibert","Esswein","Frickart","Festner","Wedel","Boder",
                       "Wenzi","Classen","Kuhn","Keudell","Doering","Busse",
                       "Pfeiffer","Loerzer","Gabriel","Brandt","Schaefer","Nuelle",
                       "Immelman", "Wittman", "Eberhardt", "Luxenbourg", "Hess", "Greim"]; 

var pilots = [];

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAMEOBJ BEGIN
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
var GAMEOBJ = {
      //data members
      Squadron:{},

createSquadron: function () {
     this.Squadron =  oSquadron; // This will not create a copy of oSquadron. Squadron is oSquadron.
     this.Squadron["name"] = "teste";
},

addNewPilot: function() {
     this.Squadron["pilots"]
},

insertValuesOnPilot: function () {
 //  this.Pilots[0]["pilotId"] = 99;
},

printSquadron: function() {
    console.log (" Squadron "  + ": " + this.Squadron["name"] + " " + oSquadron["name"]);
},

generatePilotName: function () {
    var locRandom = Math.floor((Math.random() * pilFirstNameList.length)); //
    var firstName = pilFirstNameList[locRandom];
        locRandom = Math.floor((Math.random() * pilLastNameList.length));
    var lastName = pilLastNameList[locRandom];
    return (firstName + ' ' + lastName);
}
//--------------------------------------------------

}; //End of GAME
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAMEOBJ END
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

window.onload = function () {

     //GAMEOBJ.createSquadron();
    // GAMEOBJ.printSquadron();
    for (var i = 0; i < pilotNumber; i++){
        pilots.push(GAMEOBJ.generatePilotName());
    }     

    //create the fruit list
    var lDir = document.querySelector("#outputNames");
    //Recursive function to build the directory tree
    var dlist = buildPilotList(pilots);
    lDir.innerHTML = "<ul>" + dlist + "</ul>";
};

buildPilotList = function(obj) {
    var llist = "";
    for (var i = 0; i < obj.length; i++) {
        llist += "<li>" + obj[i] + "</li>";
    }
    return llist;
};