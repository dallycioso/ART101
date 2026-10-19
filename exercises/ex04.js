// Clicker program

let counter = 1;

$("#needy-button").click( function(){
    counter = counter * 100000000000000000000000000;
    $("#needy-button").html("I've been clicked " + counter + " times!")
});
 