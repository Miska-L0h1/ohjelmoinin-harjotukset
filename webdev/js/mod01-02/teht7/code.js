//ask num
let num = parseInt(prompt("who many dice do you want to throw?"));
//create result
var result = 0
//generate number 1-4
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
for (let i = 1;  i <= num; i += 1) {
    let dice = getRandomNum(1, 6);
    result = result + dice
}

//print it to site
document.querySelector("#target").innerHTML =
            "Result: " + result + ".";