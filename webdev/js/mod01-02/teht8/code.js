//ask years
let year1 = parseInt(prompt("Start year?"));
let year2 = parseInt(prompt("End year?"));
var years = document.getElementById('target');

//check year
for (let year = year1; year <= year2; year += 1) {
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
    if (answ == true) {
        let li = document.createElement("li")
        li.innerHTML = year
        years.append(li);
    }
}