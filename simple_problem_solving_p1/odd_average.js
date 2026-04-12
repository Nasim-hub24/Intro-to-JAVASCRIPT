
 
/**
 * <-- fuction takes an array as a parameter
 * <-- give the average of the odd number
 * <---------->
 * odd average = sum of odds number / how many odd number in the array
 */


function oddaverage (numbers)
{
    const odds = [];
    for( const number of numbers)
    {
        if(number %2 ===1)
        {
            console.log('odd number is: ' , number);
            odds.push(number);
        }
    }

    let sum = 0;

    for(const number of odds)
    {
        sum = sum + number;
    }

    console.log('total sum of odd numbers is: ' , sum);
    const count = odds.length;
    console.log('length of odds number: ', count);
    const avg = sum/count;
    return avg;
}

const numbers = [20, 30, 567, 789, 233, 457];
const avg = oddaverage(numbers);
console.log('odd average is: ' , avg); 