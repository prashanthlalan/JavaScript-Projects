//Variable with boolean data type
var x = true;

//printing the data type of string_add and and expression combining a string and a number
function Coersion() {
    var string_add = document.write(typeof("20" + 5));
    document.getElementById("String_Number").innerHTML = string_add;
}

//utilizing the positive infinity
function Positive_infinity() {
    var infinity_positive = document.write(3E310);
    document.getElementById("Infinity").innerHTML = infinity_positive;
}

//utilizing the negative infinity
function Negative_infinity() {
    var infinity_negative = document.write(-3E310);
    document.getElementById("Minus_Infinity").innerHTML = infinity_negative;
}

//utilizing the Boolean Logic
function Boolean_Logic() {
    var Boolean = document.write(10>12);
    document.getElementById("Boolean_Operator").innerHTML = Boolean;
}

//utilizing the Console.log
console.log(2+2)

//utilizing the ==
function Double_Equal_Signs(){
    var isEqual =document.write(10==5*2)
    document.getElementById("Equals").innerHTML = isEqual;
}

//utilizing the ===
function Same_data_type_value() {
    var sdtsv = document.write(10===10)
    document.getElementById("same").innerHTML =sdtsv;
}
function different_data_type_value() {
    var ddtdv = document.write(10==="12")
    document.getElementById("differentBoth").innerHTML =ddtdv;
}
function different_data_type_same_value() {
    var ddtsv = document.write(10==="10")
    document.getElementById("differentBoth").innerHTML =ddtsv;
}
function same_data_type_different_value() {
    var sdtdv = document.write("10"==="12")
    document.getElementById("differentBoth").innerHTML =sdtdv;
}

//utilizing the && operator
function andLogic() {
    var andl = document.write(15>10 && 6<12)
    document.getElementById("and").innerHTML =andl;
}

//utilizing || operator
function orLogic() {
    var orl = document.write(6>10 || 6>12)
    document.getElementById("or").innerHTML =orl;
}

//utilizing the ! operator
function notFunction() {
    document.getElementById("not").inner HTML = !(50>20);
}