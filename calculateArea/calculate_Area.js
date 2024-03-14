let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width  = parseFloat(document.getElementById("width").value);

    let area = length * width;

    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;
}

function calculateGroceries() {
    let q_groceries = document.querySelectorAll(".grocery");
    let sum = 0;

    q_groceries.forEach((grocery) => {
        sum += parseFloat(grocery.value);    
    })

    document.getElementById("result_groceries").innerText = `The amount of items is: ${sum}`;
}