/**
 * array has some duplicate elements
 * ------remove duplicate from an array--------
 */


const briyany = ['korim', 'solim', 'rohim', 'solim', 'korim', 'snada'];
const packet = [1, 2, 3, 3, 2, 4, 5, 6, 7, 6];

function noDuplicate(array)
{
    const single =[];
    for(const item of array)
    {
        if(single.includes(item) === false)
        {
            single.push(item);
        }
    }
    return single;
}

const onlyOne = noDuplicate(briyany);
console.log(onlyOne);

const singlePacket = noDuplicate(packet);
console.log(singlePacket);