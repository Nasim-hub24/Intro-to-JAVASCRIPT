
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