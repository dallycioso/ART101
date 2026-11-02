let messagesA = ["Hi","Guess what?","Chicken butt!!!"];
let messagesB = ["Howdy","What?","I hate you."];

let maCount = 0
let mbCount = 0

let dialogueEnd = false

$("#character-a").click(function(){
    if (dialogueEnd == true) {}

    else if (mbCount==3) {
        $("#answers").css("display","flex");
        $("#chat").append("<p>Yin: " + "You little..." + "</p>");
        maCount = maCount + 1
        dialogueEnd = true
    }

    else if (maCount == mbCount){
        maCount = maCount + 1;
        $("#chat").append("<p>" + "Yin: " + messagesA[maCount-1] + "</p>");
    };
});

$("#character-b").click(function(){
    if (dialogueEnd == true) {}

    else if (maCount > mbCount){
        mbCount = mbCount + 1;
        $("#chat").append("<p>" + "Yang: " + messagesB[mbCount-1] + "</p>");
    };
});