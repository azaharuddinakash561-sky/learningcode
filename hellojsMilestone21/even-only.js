// function evenNumbersOnly(numbers) {
//     for (const number of numbers) {
//         // console.log(number);
//         if (number % 2 === 0) {
//             console.log(number);
            
//         }
//     }
// }
// let numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]


// evenNumbersOnly(numbers)



// even number sum korta hoba 

// function evenNumberSum(numbers ) {

//     for (const number of numbers) {
//         let sum = 0;
//         if(number % 2 ===0){
//             sum = sum + number;
//             console.log(number);
            
//         }
        
//     }
//     return sum;
 // }

// let stOrParamiter = evenNumberSum(numbers)
// console.log(stOrParamiter);
/**
 * create function that will return only the even numbers 
 * return the sum of even numbers
 * 
 */

function evenNumbersOnly (numbers) {
    let even = [];
    for (const number of numbers) {
        
        if(number % 2 === 0){
            console.log(number);
            even.push(number);
        }
        
    }
    return even;
}

let numbers = [5, 4, 2, 3, 5, 651, 33,];
console.log(numbers);
let even = evenNumbersOnly(numbers);
console.log(even);

// console.log('4' - 3);


