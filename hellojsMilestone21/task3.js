/**
 * Write a function called make_avg() which will take an array of integers and the
 *  size of that array and return the average of those values.
 */
// function make_avg(arr, size) {
//     // If array is empty, return 0
//     // if (size === 0) {
        
//     // }
    
//     let sum = 0;
//     for (let i = 0; i < size; i++) {
//         sum += arr[i];
//     }
    
//     return sum / size;
// }

// Example usage
// const numbers = [10, 20, 30, 40, 50];
// const arraySize = numbers.length;
// const average = make_avg(numbers, arraySize);
// console.log(`Average: ${average}`); // Output: Average: 30

// once more try 

/**
 * Write a function called make_avg() which will take an array of integers and the
 *  size of that array and return the average of those values.
 */ 

function  make_avg( arr, size){
    let sum = 0;
 for (let i = 0; i < size; i++) {
    sum += arr[i];
    
    
 }
    return sum / size;
}

let array = [1, 22, 33, 43, 70, 40,]
let sIze = array.length;
let store = make_avg(array,sIze )

console.log(store)