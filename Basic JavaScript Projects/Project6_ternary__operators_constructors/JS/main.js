//A function with HTML and JS using a ternary operation with input from the browser
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//A function to display the results of the constructor in an HTML element
function myFunction(){
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufractured in " + Erik.Vehicle_Year;
}

//A nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}