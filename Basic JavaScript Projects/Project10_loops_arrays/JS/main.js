function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X <=10) {
        Digit += "<br>" + X;
        X++;
    } 
    document.getElementById("Loop").innerHTML = Digit;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;        
}
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}
function constant_function() {
    const BMW = {model: "BMW X1", category: "SUV", price:60000, color:"black"}
    BMW.color ="red";
    BMW.price =62000;
    document.getElementById("Constant").innerHTML = "The cost of the " + BMW.color + " color " +
    BMW.model + " was " + BMW.price;
}