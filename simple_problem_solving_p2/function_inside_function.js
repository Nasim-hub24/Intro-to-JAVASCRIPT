

function add(num1,num2)
{
    return num1+num2;
}
function subtract(num1, num2)
{
    return num1-num2;
}
function multiply(num1, num2)
{
    return num1*num2;
}

function calculate(a,b, operation)
{
    if(operation === 'add')
    {
        const result = add(a,b);
        return result;
    }
    else if (operation === 'subtract')
    {
        const result = subtract(a,b);
        return result;
    }
    else if(operation === 'multiply')
    {
        const result = multiply(a,b);
        return result;
    }
    else{
        return "result not found";
    }
}

const output = calculate(4,5, 'multiply');
console.log("final calculation is: ", output);