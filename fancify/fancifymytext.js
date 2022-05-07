function bigs(){
    document.getElementById("userInput").style.fontSize = "24pt";
}

function bold(){
    var text = document.getElementById("userInput");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline"; 
}

function boring(){
    var text = document.getElementById("userInput");
    text.style.fontSize = "initial";
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none"
}

function moo(){
    var suffix = "-moo"
    var text = document.getElementById("userInput");
    text.style.textTransform = "uppercase";
    text.value = text.value.split('.').join('') + suffix;
}