function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X <=10) {
        Digit += "<br>" + X;
        X++;
    } 
    document.getElementById("Loop").innerHTML = Digit;
}