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
function Canvas_Gradient() {
    const canvas = document.getElementById("Gradient");
    const ctx = canvas.getContext("2d");
    
    // Create Gradient
    const my_gradient = ctx.createLinearGradient(0, 0, 500, 0);
    my_gradient.addColorStop(0, "green");
    my_gradient.addColorStop(0.5, "yellow");
    my_gradient.addColorStop(1, "purple");
    
    // Fill Rectangle
    ctx.fillStyle = my_gradient;
    ctx.fillRect(0, 0, 500, 250); 
}
