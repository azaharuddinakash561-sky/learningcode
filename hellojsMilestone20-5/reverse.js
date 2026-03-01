// const numbers = [1, 2,3,4,5,6,7,8,]

// console.log(numbers);
// numbers.reverse();

// console.log(numbers);

// const num = [];
// for (const numarik of numbers){
    
//     num.unshift(numarik)
// }
// console.log(num)

// for loop use only

// const numStor = [];

// for(let i = 0; i < numbers.length; i ++){//i = 0 ai ta position hoba konthai ai jono numbers[i] ar vitor dea hoi 

//     const num = numbers[i]; //numbers namuk upodan taka i ta ta jan man store hoba oi ta nea nea
//     numStor.unshift(num)

// }
// console.log(numStor);

let num = [1, 2,3, 5,6,7,8];
let rever  = [];
for (let i = num.length -1; i >= 0; i--){
    let num2= num[i];
    rever.push(num2)
}
console.log(rever)