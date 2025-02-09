const btn = document.getElementsByClassName("btn");
const h2 = document.getElementById("click");

let counter = 1;
const onclickhandler = function(){
    h2.innerHTML = "I am Clicked " + counter + " Times ";
    counter++;
}

