function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}
function Canvas_Graphics(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(250, 125, 100, 0, 5 * Math.PI);
    ctx.stroke();
}