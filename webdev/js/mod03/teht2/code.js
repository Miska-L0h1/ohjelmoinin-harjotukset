//establishe list
var list = document.getElementById('target');
var listorg = []
var num = parseInt(prompt("enter number of participants."))

//sort nums
for (let i = 1; i <= num; i++) {
    let name = prompt("enter name of participants "+ i +".")
    listorg[i-1] = name;
}
console.log(listorg)
listorg.sort()
console.log(listorg)
for (let i = 1; i <= num; i++) {
    let li = document.createElement("li")
    li.innerHTML = listorg[i-1]
    list.append(li);
}