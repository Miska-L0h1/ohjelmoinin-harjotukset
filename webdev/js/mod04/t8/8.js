const button = document.getElementById("start");
button.addEventListener('click', async function (){
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    var operator = document.getElementById("operation").value
    switch (operator) {
        case "add":
            var result = (num1 + num2);
            break;
        case "sub":
            var result = (num1 - num2);
            break;
        case "multi":
            var result = (num1 * num2);
            break;
        case "div":
            var result = (num1 / num2);
            break;
    }
    document.getElementById("result").innerHTML = result
});