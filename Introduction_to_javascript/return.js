
/**
 * return → sends value back
 * stops function execution
 */

function tentimes(number){
    const multiply = number*10;
    return multiply; // kala ono ow kotom nisa ar joto code lako na kana it doesn't exicute
}

const output = tentimes(10);
console.log('output is:', output);

// return using conditional

function isEven(number){
    if(number%2 ===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(20));