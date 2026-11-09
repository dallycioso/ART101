let environmentTitle = "Kerr Bridge";

let dexScan = $("#dexScan");

let environmentElements = ["damp", "quiet", "lush", "nature", "wooded"];

let scanCount = 0

let pokeDex = {
    Goomy: {mon: "Goomy", type: "Dragon", class: "Soft Tissue Pokemon", info: "Goomy requires moisture to survive, it is often found in damp and shaded locations. Be careful with its horns, they are very sensetive and should be handled delicately."},
    Panpour: {mon: "Panpour", type: "Water", class: "Spray Pokemon", info: "Nutricious water is stored in its head, it is said the redwoods of this forest grew large due to the Panpour living there."},
    Butterfree: {mon: "Butterfree", type: "Bug/Flying", class: "Butterfly Pokemon", info: "It's wings are covered with poisonous powders which repel water. It is able to fly in rain with ease and spew highly toxic dust into the air."},
    Butterfree2: {mon: "Butterfree", type: "Bug/Flying", class: "Butterfly Pokemon", info: "It's wings are covered with poisonous powders which repel water. It is able to fly in rain with ease and spew highly toxic dust into the air."},
    Butterfree3: {mon: "Butterfree", type: "Bug/Flying", class: "Butterfly Pokemon", info: "It's wings are covered with poisonous powders which repel water. It is able to fly in rain with ease and spew highly toxic dust into the air."},
    Swirlix: {mon: "Swirlix", type: "Fairy", class: "Cotton Candy Pokemon", info: "Swirlix only eats sweets, the fur on its body is as sticky as cotton candy. It is known to throw tantrums if it doesn't get its sugar intake for the day."},
    Joltik: {mon: "Joltik", type: "Bug/Electric", class: "Attaching Pokemon", info: "Joltik are often found stealing charges from various electrical appliances, the most common being phones. Joltik infestations are no joke, and have caused power shortages in buildings they occupy."},
    Pansage: {mon: "Pansage", type: "Grass", class: "Grass Monkey", info: "The leaves on its head are known to relieve stress, which makes them desireable partners for psychiatrists. Pansage is even known to share berries its found with its friends, making it an excellent partner."},
    Zorua: {mon: "Zorua", type: "Dark", class: "Tricky Fox", info: "Zorua are known to transform as students and scavenge for food on campus. It is very timid, and will avoid unnececary conflict at all costs."},
}

$(".Pkmon img").click(function () {
    let chosenMon = pokeDex[this.id]
    scanCount = scanCount + 1

    console.log(chosenMon.mon + " was selected!");
    console.log("The scan count is " + scanCount);
    console.log();
    dexScan.html("<h1>" + chosenMon.mon + " | Type: "+ chosenMon.type+" | "+ chosenMon.class+"</h1>"+"<p>"+chosenMon.info+"</p>");
})

$("#MysterySpot").click(function(){
    let mystery = prompt("//MEMORY CORRUPTED// CHOOSE BETWEEN 'GRASS' OR 'ELECTRIC'");

    if(mystery == "GRASS" || mystery == "Grass" || mystery == "grass"){
        console.log("Grass picked!")
        $("#Pansage").css("width" ,"15%")
        $("#MysterySpot").css("width" ,"0%")
    }
    else if(mystery == "ELECTRIC" || mystery == "Electric" || mystery == "electric"){
        console.log("Electric picked!")
        $("#Joltik").css("width", "6%")
        $("#MysterySpot").css("width" ,"0%")
    }

    else{
        console.log("None picked!")
    }
})

let illusionStage = 0
let ilpuz = 0

$(document).keydown(function (event) {
    if (event.code === "Space") {
    let RiddleClue = prompt("Click a little to the right of Swirlix!");
    illusionStage = 1;
  }

    if (illusionStage == 3 && ilpuz == 0){
        if (event.key == "f"){
            console.log("F")
            ilpuz = 1
        }
    }

    if (illusionStage == 3 && ilpuz == 1){
        if (event.key == "a"){
            console.log("A")
            ilpuz = 2
        }
    }

    if (illusionStage == 3 && ilpuz == 2){
        if (event.key == "c"){
            console.log("C")
            ilpuz = 3
        }
    }

    if (illusionStage == 3 && ilpuz == 3){
        if (event.key == "a"){
            console.log("A")
            ilpuz = 4
        }
    }

    if (illusionStage == 3 && ilpuz == 4){
        if (event.key == "d"){
            console.log("D")
            ilpuz = 5
        }
    }

    if (illusionStage == 3 && ilpuz == 5){
        if (event.key == "e"){
            console.log("E")
            ilpuz = 6
            $("#Zorua").css("width", "9%")
            $("#text").html("<h3>Forest dwelling Pokemon amongst a campus bridge.</h3>");
        }
    }
});

$("#HiddenSpot").click(function(){
    if (illusionStage == 1){
        let RiddleClue = prompt("Something seems odd about the scanner title...");
        illusionStage = 2;
    }
});

$("#dexTitle").click(function(){
    if (illusionStage == 2){
        $("#text").html("<h3>FACADE</h3>");
        illusionStage = 3;
    }
})