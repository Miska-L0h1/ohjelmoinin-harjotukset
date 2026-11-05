//ask if print
let ask = confirm("Should I calculate the square root?")

//math
if (ask == true) {
    //ask num
    let num = prompt("what number?");
    if (num > 0) {
        let answ = Math.sqrt(num);
        document.querySelector("#target").innerHTML =
        "The square root of " + num + " is " + answ + ".";
    } else {
        document.querySelector("#target").innerHTML =
        "The square root cant be calculated.";
    }
} else {
    document.querySelector("#target").innerHTML =
        "The square root is not calculated.";
}

//print it to site
if (answ == true) {
    document.querySelector("#target").innerHTML =
             "year " + year + " is a leep year";
}