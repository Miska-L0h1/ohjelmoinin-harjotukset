//establishe list
var list = document.getElementById('target');
var listorg = []

//ask nums
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt("enter number."))
    listorg[i-1]= num;
}

//sort nums
for (let i = 1; i <= 5; i++) {
    let num = listorg[5-i]
    let li = document.createElement("li")
    li.innerHTML = num
    list.append(li);
}