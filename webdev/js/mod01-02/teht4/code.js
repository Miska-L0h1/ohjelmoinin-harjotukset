//ask name
let name = prompt("What is your name?");
//generate number 1-4

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let num = getRandomNum(1, 4);


//asaing house
if (num == 1) {
    var house = "Gryffindor";
} else if(num == 2) {
    var house = "Slytherin";
} else if(num == 3) {
    var house = "Hufflepuff";
} else if (num == 4) {
    var house = "Ravenclaw";
}

//print it to site
document.querySelector("#target").innerHTML =
            name + " you are " + house + ".";