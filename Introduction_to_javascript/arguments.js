
/**
 * Parameter → variable in the function definition
 * Argument → actual value you give to the function
 *  
 * bellow the code 
 * (number)-------< is the parameter
 * (15)----------< is the argument
 */ 


function doubleit(number){
    const double = number*2;
    console.log(number, double);
}

console.log('i will call the function');
doubleit(15);
console.log('-----------');
doubleit(12);
console.log('-----------');
doubleit(30);
console.log('------------');