

function woodQuantity(chairQuantity, tableQuantity, bedQuantity)
{
    const perchairwood = 3;
    const pertablewood = 4;
    const perbedwood = 7;

    const totalchairwood = chairQuantity * perchairwood;
    const totaltablewood = tableQuantity * pertablewood;
    const totalbedwood = bedQuantity * perbedwood;

    const totalWood = totalchairwood + totaltablewood + totalbedwood;

    return totalWood;
}

const wood = woodQuantity(10, 2, 1);
console.log("total wood needed: ", wood);