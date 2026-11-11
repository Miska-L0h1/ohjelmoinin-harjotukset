let n = 1;

while (n < 4) {
    var list = document.createElement("li");
    if (n == 1) {
        list.innerHTML = ( "first list");
    } else if (n == 2) {
        list.innerHTML = ( "second list");
    } else if (n == 3) {
        list.innerHTML = ( "third list");
    }
    document.getElementById("target").appendChild(list);
    n++;
}