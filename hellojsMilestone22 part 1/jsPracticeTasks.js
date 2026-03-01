//  task 1
function  celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
    
}
// let transfromFahrenheit = celsiusToFahrenheit(50);
// console.log(transfromFahrenheit);
//  task 2


// function findReptORoutpur (numArr, find){
//     let count = 0;
//     for (const num of numArr) {
//         if (num === find) {
//             count ++;
//         }
        
//     }
//     return count
// }

// let numArr =  [5,6,11,12,98, 5];
// console.log(findReptORoutpur(array, 5));
// console.log(findReptORoutpur(find, 25));
// let numbers = [1, 2, 3, 4, 5, 6, 5, 7, 8, ]
// let find = 5;
// function repitNumberTime(numbers, find) {

//     let count = 0 ;

//     for (const item of numbers) {

//         if (item === find) {
//             count ++;
//         }

//     }
//     return count;
    
// }
// console.log(repitNumberTime(numbers, find))
// console.log(count);


// let numbersArray =  [1, 2, 3, 4, 5, 6, 6];
// let find = 25;

// function countRemArryNum(numbersArray, find) {
//     let count = 0;

//     for (const items of numbersArray) {

//         if (items === find) {
//             count ++;
            
//         }
        
//     }
//     return count;
// }

// console.log(countRemArryNum(numbersArray, find));

//------------------------------------------------------
/**------------------------task 3--------------------------- */

// Write a function to count the number of vowels in a string.

// let vowelsCo =["a", "e", "i", "o", "u"];
// let strArray = [" I am learning Programming to become a programmer"]

// function vowfinder(vowelsCo, strArray) {
//     let count = 0;

//     for (const sentence of strArray) {
//         for (const char of sentence) {
//             if(vowelsCo.includes(char)){
//                 count ++
//             }
//         }
//         // console.log(sentence)
//     }return count;
    
// }
// console.log(vowfinder(vowelsCo, strArray));

// function vowfinder(vowelsCo, strArray) {
//     let count = 0;
    
//     for (const sentence of vowelsCo) {
//         for (const char of sentence) {
//             if(strArray.includes(char)){
//                 count ++
//             }
//         }
//         // console.log(sentence)
//     }return count;
    
// }
// console.log(vowfinder(vowelsCo, strArray));
// wrong down
// let vowelsCo =["a", "e", "i", "o", "u"];
// let strArray = [" I am learning Programming to become a programmer"]
// function vowfinder(vowelsCo, strArray) {

//     let count = 0;
//     for (const item of strArray.toLowerCase()) {
//         if (vowelsCo.includes(item)) {
//             count ++;
//         }
//     }return count;
// }

// console.log(vowfinder(vowelsCo, strArray));

// let vowelsCountAble = ["a", "e", "i", "o", "u"];
// let str = ["I am learning Programming to become a programmer"];

// function findVowel(str, vowelsCountAble) {
//     let countV = 0;

//     for (let char of str.toLowerCase()) {
//         if (vowelsCountAble.includes(char)) {
//             countV++;
//         }
//     }

//     return countV;
// }

// console.log(findVowel(str, vowelsCountAble)); // Output: 15


// --------------------------------task4--------------------------------

function findLongestWord(str) {
    // Split the string into words by spaces
    const words = str.split(" ");
    
    // Initialize variable to store the longest word
    let longestWord = "";

    // Loop through each word
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; // Update if current word is longer
        }
    }

    return longestWord;
}

// Sample input
const sentence = "I am learning Programming to become a programmer";

// Function call
console.log(findLongestWord(sentence)); 
