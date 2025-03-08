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

//Defining Category_Function to display 
function Category_Function() {
    Age = document.getElementById("Age").value;
    if (Age <= 20) {
        document.getElementById("result").innerHTML = "You are a teenager!";    
    }
    else {
        document.getElementById("result").innerHTML = "You are not a teenager!";
    } 
}