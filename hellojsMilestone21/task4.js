// Write a function called count_zero() which will take a binary string
//  (Binary string is a string which is consist of only 0 and 1)
//  as parameter and count how many 0’s are there in that string.

// function count_zero(str) {
//     let con = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '0' ) {
//             con++;
//         }
        
//     }
//     return con;
    
// }

// let bistr = count_zero('110010101');
// console.log(bistr);


/*Write a function called count_zero() which will take a binary string 
(Binary string is a string which is consist of only 0 and 1) 
as parameter and count how many 0’s are there in that string*/

// anothre  try

function count_zero(strinG) {
    let store = 0;
    for (let i = 0; i < strinG.length; i++) {
        if (strinG[i] === '1') {
            store ++;
        }
        
    }
    return store;
}

let count_zero_strinG = count_zero('11010101')
console.log(count_zero_strinG);
 