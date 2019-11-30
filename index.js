

feuon();

function feuon () {
    red();    
    setTimeout(green, 10000);
    setTimeout(yellow, 15000);
    setTimeout(feuon, 20000);
}


function red() {
   let el1 = document.querySelector("#red");
   let el2 = document.querySelector("#yellow");
   let el3 = document.querySelector("#green");

   el1.className = "red";
   el2.className = "yellowoff";
   el3.className = "greenoff";
}


function yellow() {
    let el1 = document.querySelector("#red");
    let el2 = document.querySelector("#yellow");
    let el3 = document.querySelector("#green");

    el1.className = "redoff";
    el2.className = "yellow";
    el3.className = "greenoff";

}

function green() {

    let el1 = document.querySelector("#red");
    let el2 = document.querySelector("#yellow");
    let el3 = document.querySelector("#green");

    el1.className = "redoff";
    el2.className = "yellowoff";
    el3.className = "green";
}


const el = document.querySelector("#b1");
el.addEventListener("click", function () {
    setTimeout(yellow, 2000);
    setTimeout(red, 5000);
    
});
