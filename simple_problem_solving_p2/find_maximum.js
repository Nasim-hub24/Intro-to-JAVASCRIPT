
/**
 *  find the maximum between two number
 *  using function
 */

function getMex(num1 , num2)
{
    if(num1 > num2)
    {
        return num1;
    }
    else
    {
        return num2;
    }
}
const max = getMex(70, 60);
console.log('max of the two number: ', max);

// find the maximum between three number
// using function

function getMaximum(num1, num2, num3)
{
    if(num1>num2 && num1>num3)
    {
        return num1;
    }
    else if(num2> num1 && num2>num3)
    {
        return num2;
    }
    else
    {
        return num3;
    }
}

const maximum = getMaximum(60, 70,80)
console.log(maximum);