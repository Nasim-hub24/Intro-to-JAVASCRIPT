
const price = 3000;

if(price > 500)
{
    // discount 10%
    const discount = price * 10 / 100;
    console.log(discount);
}
else if(price > 2000)
{
    // discount 5%
    const sar = price * 5 / 100;
    console.log(sar);

}
else{
    console.log('no discount');
}