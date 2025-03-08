//Global Variables Add_numbers_1 and Add_numbers_2
var X=10
function Add_numbers_1() {
    document.write(20 + X + "</br>");
}
function Add_numbers_2() {
    document.write(X+100 + "</br>");
}
Add_numbers_1();
Add_numbers_2();

//Local Variables Add_numbers_3 and Add_numbers_4
function Add_numbers_3(){
    var Y = 10;
    document.write(20 + Y + "</br>")
}
function Add_numbers_4() {
    document.write(Y+100);
    }
Add_numbers_3();
Add_numbers_4();

//Console.log Add_numbers_5 and Add_numbers_6
function Add_numbers_5(){
    var Z = 10;
    console.log(15 + Z);
}
function Add_numbers_6() {
    console.log(Z + 100);
    }
Add_numbers_5();
Add_numbers_6();

//Adding If method
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Defining Category_Function to displaying the stages of age
function Category_Function() {
    Age = document.getElementById("Age").value;
    if (Age <= 1) {
        document.getElementById("result").innerHTML = "You are a infant!";    
    }
    else if (Age >= 2 && Age <= 4) {
        document.getElementById("result").innerHTML = "You are a toddler!";
    }
    else if (Age >= 5 && Age <= 12) {
        document.getElementById("result").innerHTML = "You are a child!";
    }
    else if (Age >= 13 && Age <= 19) {
        document.getElementById("result").innerHTML = "You are a teen!";
    }
    else if (Age >= 20 && Age <= 39) {
        document.getElementById("result").innerHTML = "You are a adult!";
    }
    else if (Age >= 40 && Age <= 59) {
        document.getElementById("result").innerHTML = "You are a middle aged adult!";
    }
    else {
        document.getElementById("result").innerHTML = "You are a senior adult!";
    }