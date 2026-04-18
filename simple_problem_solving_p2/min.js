
const prices = [500, 300, 400, 1000];

function getMin(numbers)
{
    let min = numbers[0];
    for(const num of numbers)
    {
        if(num < min)
        {
            min = num;
        }
    }
    return min ;
}

const minumum = getMin(prices);
console.log("minimum number is: ", minumum);