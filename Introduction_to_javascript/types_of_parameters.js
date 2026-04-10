
/**
 * for a given strings tell me weather it has even number of characters or not
 */

function evenSize(str){
    const size = str.length;
    console.log(str, size);
    if(size%2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}
evenSize('dhaka');
evenSize('faka');

// -----------<Sum of an array using function>--------------

function sumNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum+number;
    }
    return sum;
}

const numbs = [20, 30, 40, 50];
const sum = sumNumber(numbs);
console.log('total sum is: ', sum);

// ---------------<find the even and odd numbers>------------------

function evenOnly(numbers){

    const evens = [];
    const odds = [];
    for(const number of numbers){
        if(number%2 ===0){
            console.log(number);
            evens.push(number);
        }
        else{
            odds.push(number);
        }
    }
    return {evens, odds};
}

const numbers = [8, 9, 6, 40 ,3];
const evens = evenOnly(numbers);
// const odds = evenOnly(numbers);
console.log('even numbers are: ', evens);
// console.log('odd number are: ', odds);

