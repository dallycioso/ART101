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
        console.log("Grass picked!15")
        $("#Pansage").css("width" ,"15%")
        $("#MysterySpot").css("width" ,"0%")
    }
    else if(mystery == "ELECTRIC" || mystery == "Electric" || mystery == "electric"){
        console.log("Electric picked!6")
        $("#Joltik").css("width", "6%")
        $("#MysterySpot").css("width" ,"0%")
    }

    else{
        console.log("None picked!")
    }
})