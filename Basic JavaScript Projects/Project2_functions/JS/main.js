//main.js   

//Write a function that uses the += operator
function  My_Assignment_Function() {
    var str1 = "Button Text";
    var str2 = "Button Text1"
    document.getElementById("Paragraph1").innerHTML = str1;
    document.getElementById("Paragraph2").innerHTML = str2;
}
function myFunction() {
    var sentence ="I am learning";//create the variable sentence
    sentence += " a lot from this book!";//using the += operator to add the variable
    document.getElementById("Concatenate").innerHTML = sentence; //using document.getElementByID()
}