function myFunction () {//Defining and naming addition function
    var addition = 3+3;
    document.getElementById("Math").innerHTML = "3 + 3 =" + addition; //Print the result in HTML
}
function myFunction1 () {//Defining and naming substraction function
    var substraction = 8-3;
    document.getElementById("Math2").innerHTML = "8 - 3 =" + substraction;//Print the result in HTML
}
function myMultiplication () {//Defining and naming multiplication function
    var multiplication = 8*3;
    document.getElementById("Math3").innerHTML = "8 * 3 =" + multiplication; //Print the result in HTML
}
function myDivision () {//Defining and naming division function
    var division = 16/2;
    document.getElementById("Math4").innerHTML = "16 / 2 =" + division; //Print the result in HTML
}
function myMultiOperators () {//Defining and naming Multiple Operators function
    var moremath = (22*5)/2+6-28;
    document.getElementById("Math5").innerHTML = "(22*5)/2+6-28 = " + moremath ;//Print the result in HTML
}
function ModulusOperator () { //Defining and naming Modulus Operator function
    var modulus =56 % 6;
    document.getElementById("Math6").innerHTML = "Reminder for 56 divided by 6 is " + modulus;//Print the result in HTML
}
function negation_Operator () {//Defining and naming Negation function
    var z = 20;
    document.getElementById("Math7").innerHTML = -z;//Print the result in HTML
}
function Increment () {//Defining and naming increment function
    var x = 15;
    x++;
    document.getElementById("Math8").innerHTML = x;//Print the result in HTML
}
function Decrement () {//Defining and naming decrement function
    var y = 26;
    y--;
    document.getElementById("Math9").innerHTML = y;
}
function Random () {//Defining and naming Math.random function
    var a = Math.round(Math.random()*500);
    document.getElementById("Math10").innerHTML = a; 
}