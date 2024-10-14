let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker(){
    let amount = parseFloat(document.getElementById('grocery1').value) + parseFloat(document.getElementById('grocery1').value) + parseFloat(document.getElementById('grocery1').value);
    document.getElementById('result2').innerHTML = `The total amount is: $${amount}`
}