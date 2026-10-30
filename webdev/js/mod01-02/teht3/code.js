let int1 = parseInt(prompt("Give number 1"))
let int2 = parseInt(prompt("Give number 2"))
let int3 = parseInt(prompt("Give number 3"))

//calculate
let sum = int1 + int2 + int3
let prod = int1 * int2 * int3
let avrg = sum/3

//print it to site
document.querySelector("#target").innerHTML =
            sum + ", " + prod + " and " + avrg;