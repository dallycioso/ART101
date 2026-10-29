// Clicker program

function paintPage(color){
$("body").css("background-color", color)
}

paintPage("red");

let counter = 0;
let colorCounter = 0;

let buttonText = "";

let colors =["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink", "blue", "teal"];

$("#needy-button").click( function(){
    counter = counter + 1;
    colorCounter = colorCounter + 1;

    console.log(counter);
    console.log(colorCounter);
    console.log(colors);

    $("#needy-button").html("I've been clicked " + counter + " times! The color is " + colors[colorCounter - 1] + "!");

    //$("body").css("background-color", colors[colorCounter-1])
    paintPage(colors[colorCounter-1])

    //$("body").append("<img width = '50' src='" + colors[counter - 1] + ".jpg'>")

    if(colorCounter >= 10) {colorCounter = 0}

    if(counter <= 5) {$("#needy-button").after("<p>my mood is... normal<p>");}
    else if(counter <= 12) {$("#needy-button").after("<p>my mood is... e<p>");}
});

$(".color-circle").css("background-color", this.id);

$(".color-circle").click(function(){
    paintPage(this.id);
});