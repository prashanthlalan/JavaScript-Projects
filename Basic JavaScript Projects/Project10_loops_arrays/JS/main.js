//A function using a while loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X <=10) {
        Digit += "<br>" + X;
        X++;
    } 
    document.getElementById("Loop").innerHTML = Digit;
}

//A function using a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;        
}

//A function with an array
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

//A function with const
function constant_function() {
    const BMW = {model: "BMW X1", category: "SUV", price:60000, color:"black"}
    BMW.color ="red";
    BMW.price =62000;
    document.getElementById("Constant").innerHTML = "The cost of the " + BMW.color + " color " +
    BMW.model + " was " + BMW.price;
}
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X)

//Creating an object with the let keyword
function let_function() {
    let car = {
        make: "Dodge ",
        model: "Viper",
        year: "2021",
        color: "Red",
        description: function() {
            return "The car is a " + this.year + " "+ this.color + " " + this.make + this.model;
        }
    };
document.getElementById("Car_Object").innerHTML = car.description();
}