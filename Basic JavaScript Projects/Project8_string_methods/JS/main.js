function full_sentence(){
    var part_1 = "This sentence is made from ";
    var part_2 = "one broken ";
    var part_3 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}