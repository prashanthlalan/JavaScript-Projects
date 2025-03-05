function myFunction () {
    var addition = 3+3;
    document.getElementById("Math").innerHTML = "3 + 3 =" + addition;
}
function myFunction1 () {
    var substraction = 8-3;
    document.getElementById("Math2").innerHTML = "8 - 3 =" + substraction;
}
function myMultiplication () {
    var multiplication = 8*3;
    document.getElementById("Math3").innerHTML = "8 * 3 =" + multiplication;
}
function myDivision () {
    var division = 16/2;
    document.getElementById("Math4").innerHTML = "16 / 2 =" + division;
}
function myMultiOperators () {
    var moremath = (22*5)/2+6-28;
    document.getElementById("Math5").innerHTML = "(22*5)/2+6-28 = " + moremath ;
}
function ModulusOperator () {
    var modulus =56 % 6;
    document.getElementById("Math6").innerHTML = "Reminder for 56 divided by 6 is " + modulus;
}
function negation_Operator () {
    var z = 20;
    document.getElementById("Math7").innerHTML = -z;
}
function Increment () {
    var x = 15;
    x++;
    document.getElementById("Math8").innerHTML = x;
}
function Decrement () {
    var y = 26;
    y--;
    document.getElementById("Math9").innerHTML = y;
}
function Random () {
    var a = Math.round(Math.random()*500);
    document.getElementById("Math10").innerHTML = a; 
}