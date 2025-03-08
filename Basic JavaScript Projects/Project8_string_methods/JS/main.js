function full_sentence(){
    var part_1 = "This sentence is made from ";
    var part_2 = "one broken ";
    var part_3 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}