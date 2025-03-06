function Coersion() {
    var string_add = document.write(typeof("20" + 5));
    document.getElementById("String_Number").innerHTML = string_add;
}
function Positive_infinity() {
    var infinity_positive = document.write(3E310);
    document.getElementById("Infinity").innerHTML = infinity_positive;
}
function Negative_infinity() {
    var infinity_negative = document.write(-3E310);
    document.getElementById("Minus_Infinity").innerHTML = infinity_negative;
}