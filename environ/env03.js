let environmentTitle = "Kerr Bridge";

let dexScan = $("#dexScan");

let environmentElements = ["damp", "quiet", "lush", "nature", "wooded"];

let mainEntity = {
    name: "The Curtain",
    type: "soft border",
    mood: "suspicious",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

let pokeDex = {
    Goomy: {mon: "Goomy", type: "Dragon", class: "Soft Tissue Pokemon", info: "Goomy requires moisture to survive, it is often found in damp and shaded locations."},
    Panpour: {mon: "Panpour", type: "Water", class: "Spray Pokemon", info: "Nutricious water is stored in its head, it is said the redwoods of this forest grew large due to the Panpour living there."},
    Butterfree: {mon: "Butterfree", type: "Bug/Flying", class: "Butterfly Pokemon", info: "It's wings are covered with poisonous powders which repel water. It is able to fly in rain with ease and spew highly toxic dust into the air."},
    Butterfree2: {mon: "Butterfree", type: "Bug/Flying", class: "Butterfly Pokemon", info: "It's wings are covered with poisonous powders which repel water. It is able to fly in rain with ease and spew highly toxic dust into the air."},
    Butterfree3: {mon: "Butterfree", type: "Bug/Flying", class: "Butterfly Pokemon", info: "It's wings are covered with poisonous powders which repel water. It is able to fly in rain with ease and spew highly toxic dust into the air."},
    Swirlix: {mon: "Swirlix", type: "Fairy", class: "Cotton Candy Pokemon", info: "Swirlix only eats sweets, the fur on its body is as sticky as cotton candy. It is known to throw tantrums if it doesn't get its sugar intake for the day."},
}

$("#Goomy").click( function(){


console.log("Pokemon was clicked!");
dexScan.html("<h1>Goomy #40</h1><p>hi<p>");
dexScan.css("background-color", "rgb(216, 237, 255)");
dexScan.css("padding", "8px 12px");
dexScan.css("width: 10%;");
})

$(".Pkmon img").click(function () {
let chosenMon = pokeDex[this.id]

dexScan.html("<h1>" + chosenMon.mon + " | Type: "+ chosenMon.type+" | "+ chosenMon.class+"</h1>"+"<p>"+chosenMon.info+"</p>");
})