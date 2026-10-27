let count = 0;

let buttonCreature = {
    name: "Oddity",
    favColor: "green",
    isAround: false,
    moods: ["drowsy", "curious", "horrified", "hysterical", "angry", "somber"]
};

$("#needy-button").click(function () {
    count = count + 1;
    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    //let message = "My current mood is " + currentMood;
    let message = "<p>My name is " + buttonCreature.name;
     message = message + "<p>Stop clicking me! You've done it " + count + " times!</p>";
    message = message + "<p>I feel " + currentMood + "...</p>";
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});

