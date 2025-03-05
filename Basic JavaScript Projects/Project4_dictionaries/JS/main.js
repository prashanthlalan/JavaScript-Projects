function Func_Dictionary() {
    var Parrot = {
        Color:"Green",
        type:"Bird",
        favorite_food:"Seeds" 
    };
    delete Parrot.Color;
    document.getElementById("Dictionary").innerHTML = Parrot.Color;
}