//ask num
let num = parseInt(prompt("Enter number?"));

//check year
for (let i = num; ; year += 1) {
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