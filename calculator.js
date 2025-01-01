function calculate(operator){
    let num1=parseFloat(document.getElementById('num1').value);
    let num2=parseFloat(document.getElementById('num2').value);
    if(isNaN(num1)||isNaN(num2)){
        showResult("Please Enter The Valid No.");
        return;
    }
    let result;
    switch(operator){
        case'+':
        result = num1 + num2;
        break;
        case'-':
        result =num1 - num2;
        break;
        case'*':
        result =num1 * num2;
        break;
        case'/':
        if(num2==0){
            showResult("Cannot Devide By Zero");
            return;
        }
        result=num1 / num2;
        break;
        default:
            showResult("Invalid Operator");
            return 0;
    }
    showResult(`${result}`);
   
    
}
function showResult(message){
    document.getElementById('result').textContent = message;
}

