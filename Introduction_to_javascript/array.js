
/**
 * loop tenchnique 
 * 1. for 
 * 2. while
 * 3. for in --> object loop korar jono
 * 4. for of --> array loop korar jono
 */

// for of 
/**
 
const friends = ['kashem sulaimane', 'ali khamenie', 'abbas agrachi'];

console.log(friends.length);

for (const friend of friends)
{
    console.log(friend);
}

for(let i=0; i<friends.length;i++){
    console.log (friends[i]);
    console.log(i);
}
 */     

// Reverse an array

const numbers = [ 10 , 20 ,30 ,40];
console.log(numbers);

const rev_num = [];

for(const number of numbers){
    rev_num.unshift(number);
}
console.log(rev_num);