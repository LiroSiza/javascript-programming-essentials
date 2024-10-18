    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let result = [];
        result = operations(num1, num2);

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function operations(a, b) {
    let results = [];
    // Introduce a debugger statement to pause execution
    debugger;
    try{
        results.push(a+b);
        results.push(a*b);
        results.push(a/b);
    }catch (error){
        console.log("Error de operación");
    }

    return results;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement1 = document.getElementById('resultAdd');
    resultElement1.textContent = `The result is: ${result[0]}`;
    const resultElement2 = document.getElementById('resultMultiply');
    resultElement2.textContent = `The result is: ${result[1]}`;
    const resultElement3 = document.getElementById('resultDivision');
    resultElement3.textContent = `The result is: ${result[2]}`;
}
        