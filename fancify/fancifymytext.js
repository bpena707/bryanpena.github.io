// function Alert(){
//     alert("Hello world");
// }

//Bigger Text 
function bigs(){
    document.getElementById("userInput").style.fontSize = "24pt";
}

//Bold text 
function bold(){
   var txt = document.getElementById("userInput");
   txt.style.fontWeight = "bold";
   txt.style.color = "blue";
   txt.style.textDecoration = "underline";
}

//Boring text
function boring(){
    var txt = document.getElementById("userInput");
    txt.style.fontSize = "initial";
    txt.style.fontWeight = "normal";
    txt.style.color = "black";
    txt.style.textDecoration = "none";
}

//Moo function to uppercase and append -moo suffix
function Moo(){
    var suffix = "-moo";
    var text = document.getElementById("userInput");
    text.style.textTransform = "uppercase";
    text.value = text.value.split('.').join('') + suffix;
}