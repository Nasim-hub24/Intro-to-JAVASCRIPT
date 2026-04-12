
/**
 *------<A year is a leap year if: >---------
 * 
 *  1--< Divisible by 4 → Leap year
 *  2--< BUT if divisible by 100 → Not a leap year
 */
function leapyear(year){
    if(year% 100 !== 0 && year% 4 ===0 ){
        return true;
    }
    else
    {
        return false;
    }
}
const leap = leapyear(200);
const leap1 = leapyear(2019);
console.log(leap , leap1);