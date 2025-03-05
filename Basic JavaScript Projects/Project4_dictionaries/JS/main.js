function Func_Dictionary() {
    var Parrot = {
        Color:"Green",
        type:"Bird",
        favorite_food:"Seeds" 
    };
    delete Parrot.Color; //This removes the Color from the Dictionary before it is displayed 
    document.getElementById("Dictionary").innerHTML = Parrot.Color;
}