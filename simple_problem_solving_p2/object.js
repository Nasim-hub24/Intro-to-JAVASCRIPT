
const mobiles =[
    {name: 'samsung', price: 1000, color: 'black'},
    {name: 'hwv', price: 8000, color: 'black'},
    {name: 'msung', price: 200, color: 'black'},
    {name: 'walton', price: 4000, color: 'black'},
    {name: 'lenovo', price: 7000, color: 'black'},
]

function cheapestPhone(phones)
{
    let min = phones[0];
    for(const phone of phones)
    {
        if( phone.price < min.price)
        {
            min = phone;
        }
    }
    return min;
}

const low = cheapestPhone(mobiles);
console.log(low);