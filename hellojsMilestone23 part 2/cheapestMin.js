// a Array inside maney object type data

let phones = [
    {
        name:'samsunt', 
        price:200000, 
        camara: '13mp',
        color: 'black'
    },
    {
        name:'samuPf', 
        price:300000, 
        camara: '13mp',
        color: 'black'
    },
    {
        name:'xoami', 
        price:180000, 
        camara: '13mp',
        color: 'black'
    },
    {
        name:'Oppo', 
        price:300000, 
        camara: '13mp',
        color: 'black'
    },
    {
        name:'Iphone', 
        price:100000, 
        camara: '13mp',
        color: 'black'
    },
    {
        name:'walton', 
        price:310000, 
        camara: '13mp',
        color: 'black'
    },
    {
        name:'htc', 
        price:270000, 
        camara: '13mp',
        color: 'black'
    }

]

function getcheapestPhone(phones) {
    let min= phones[0];
    for (const phone of phones) {
       if (phone.price > min.price) {
        min = phone
       }
    }
    return min;
}

let cheap = getcheapestPhone(phones);
console.log('cheapest phone is : ', cheap);
