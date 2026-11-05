//ask year
let year = prompt("What year?");


//check year
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            var answ = true
        } else {
            var answ = false
        }
    } else {
        var answ = true
    }
} else {
    var answ = false;
}

//print it to site
if (answ == true) {
    document.querySelector("#target").innerHTML =
             "year " + year + " is a leep year";
} else {
document.querySelector("#target").innerHTML =
            "year " + year + " is not a leep year";
}