const products = [
    {name: 'shampoo', price: 300}, 
    {name: 'chiruni', price: 100}, 
    {name: 'shirt', price: 700}, 
    {name: 'pant', price: 1200}, 
]

function getshoppingTotal (products) {
    let total = 0;
    for (const product of products) {
        // console.log(products)

        total = total + product.price;

    
    }return total;

}
let total  = getshoppingTotal(products);
console.log('total products gula : ', total);
