// function layerDiscountedTotal(quantity) {
//     const first100price = 100;
//     const second100price = 90
//     const above200price = 70;


//     if (quantity <= 100) {
//         const total = quantity * first100price;
//         return total;
//     } else if(quantity <= 200 ) {
//         const first100total = 100 * first100price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * second100price;
//         const total = first100total + remainingTotal;
//         return total;
//     } else{
//         const first100total = 100 * first100price;
//         const second100total = 100 * second100price;
//         const remainingQuantity = quantity - 200;
//         const remainingTotal = remainingQuantity * above200price;
//         const total = first100price + second100total + remainingTotal;
//         return total;
//     }
// }

// console.log(layerDiscountedTotal(9));

function multilayerDiscount(quantity) {
    let first100Price = 100;
    let second100price = 90;
    let above200price = 70;

    if(quantity <= 100){
        let total = quantity * first100Price;
        return total;
    }else if(quantity <= 200){
        let first100total =  100 * first100Price;

        let remainingQuantity = quantity - 100;

        let remainingTotal = remainingQuantity * second100price;

        const total = first100total + remainingTotal
        return total;
    }else {
        let first100total = 100 * first100Price;
        let second100total = 100 * second100price
        let remainingQuantity = quantity - 200;
        let remainingTotal = remainingQuantity * above200price;
        let total =  first100total + second100total +  remainingTotal;
        return total;
       
    }
}

console.log(multilayerDiscount(180));
