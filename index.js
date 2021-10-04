
function bp () {

    var min = 1;
    var max = 3;

var random = Math.floor(Math.random() * (max - min + 1) + min);
    if(random === 1) {
        var imagepp = document.getElementById("imagepp")
        imagepp.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
        document.getElementById("imagepp").style.visibility= "visible";
        document.getElementById("imageff").style.visibility= "hidden";
        document.getElementById("imagecc").style.visibility= "hidden";
        document.getElementById("myP").innerHTML = "Try Again"
}

    if(random === 2) {
        var imageff = document.getElementById("imageff")
        imageff.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
        document.getElementById("imagepp").style.visibility= "hidden";
        document.getElementById("imageff").style.visibility= "visible";
        document.getElementById("imagecc").style.visibility= "hidden";
        document.getElementById("myP").innerHTML = "IA won :("
}

    if(random === 3) {
        var imagecc = document.getElementById("imagecc")
        imagecc.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
        document.getElementById("imagepp").style.visibility= "hidden";
        document.getElementById("imageff").style.visibility= "hidden";
        document.getElementById("imagecc").style.visibility= "visible";
        document.getElementById("myP").innerHTML = "You won :)"
}


}



function bf () {

    var min = 1;
    var max = 3;

var random = Math.floor(Math.random() * (max - min + 1) + min);
    if(random === 1) {
        var imagepp = document.getElementById("imagepp")
        imagepp.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
        document.getElementById("myP").innerHTML = "You won :)"
}

    if(random === 2) {
        var imageff = document.getElementById("imageff")
        imageff.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
        document.getElementById("myP").innerHTML = "Try Again"
}

    if(random === 3) {
        var imagecc = document.getElementById("imagecc")
        imagecc.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
        document.getElementById("myP").innerHTML = "IA won :("
}
}




function bc () {

    var min = 1;
    var max = 3;

var random = Math.floor(Math.random() * (max - min + 1) + min);
    if(random === 1) {
        var imagepp = document.getElementById("imagepp")
        imagepp.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
        document.getElementById("myP").innerHTML = "IA won :("
}

    if(random === 2) {
        var imageff = document.getElementById("imageff")
        imageff.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
        document.getElementById("myP").innerHTML = "You won :)"
}

    if(random === 3) {
        var imagecc = document.getElementById("imagecc")
        imagecc.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
        document.getElementById("myP").innerHTML = "Try Again"
}

}
