function performOperation(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    if(!isNaN(num1) && !isNaN(num2)){
        let result_mult = operation(num1,num2,"*");
        let result_div  = operation(num1,num2,"/");
        let result_sum  = operation(num1,num2,"+");
        let result_sub  = operation(num1,num2,"-");


        displayResult([result_mult,result_div,result_sum,result_sub]);
    } else {
        displayResult("Enter valid numbers");
    }
}

function operation(num1,num2,operation) {
    debugger;

   switch(operation) {
    case "*":
        return num1 * num2;
    case "+":
        return num1 + num2;
    case "-":
        return num1 - num2;
    case "/":
        return num1 / num2;
    default:
        break;
   }

    return num1 * num2;
}

function displayResult(result){
    if(typeof(result) == "object"){
        document.getElementById("result").textContent  = `Result of operations mult is: ${result[0]},
        Result of operations div is: ${result[1]},
        Result of operations sum is: ${result[2]},
        Result of operations sub is: ${result[3]},`;
    } else {
        document.getElementById("result").textContent  = `Result of operations is: ${result}`;
    }
}