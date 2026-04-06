
/** 
 * -------- WHAT IS FUNCTION IN JS --------
 * --< function is a block of code or a set of statements that performs 
 *     a task when it is called.
 * --< maintains relationship with input and output.
 */

// HOW TO DECLEAR A FUNCTION

const value = 50;
function FanOff(){
    console.log('bosa takay utan');
    console.log('towards the swich');
    console.log('off the swich');
    console.log('kal katham');
}
FanOff(); // for print the function 

// parameter in function 

function square(number){
    console.log('given number is: ' , number);
    const borgo = number*number;
    console.log('borgo is: ', borgo);
}
square(4);

// using two parameter in a function 

function sum(num1 , num2){
    const addition = num1 + num2;
    console.log(addition);
}
sum (20 , 30);

// Diffrence

function age(num1 , num2){
    const diffrence = num1 - num2;
    console.log(num1,num2, 'diffrence is: ', diffrence);
}
const fatherage = 40;
const myage = 10;
age(fatherage,myage);
