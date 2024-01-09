function calculate(tech) {
    var num_1 = parseFloat(document.getElementById("var_1").value);
    var num_2 = parseFloat(document.getElementById("var_2").value);

    var result;

    switch (tech) {
        case 'add':
            result = num_1 + num_2;
            break;
        case 'subtract':
            result = num_1 - num_2;
            break;
        case 'multiply':
            result = num_1 * num_2;
            break;
        case 'divide':
            result = num_1 / num_2;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("output").innerHTML = "Result: " + result;
}

function outputSum() {
    var totalSum = parseInt(document.getElementById("inputSum").value);
    
    if (isNaN(totalSum) || totalSum < 0) {
        document.getElementById("output").innerHTML = "Invalid input for summation.";
        return;
    }

    var total = 0;
    for (var j = 1; j <= totalSum; j++) {
        total += j;
    }

    document.getElementById("output").innerHTML = "Summation up to " + totalSum + ": " + total;
}
