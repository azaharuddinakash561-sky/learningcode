// let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// for(let arr = colors.length -1; arr >= 0;  arr --){
//     console.log(colors[arr]);
// }
/**output
 * undefined
 * orange 
 * yellow 
 * green 
 * blue 
 * red
 */
// let colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let rev = [];
// for(let i = colors.length - 1; i >= 0; i--){
//     rev.push(colors[i])
// }
// console.log(rev)
/**
 * output 
 * [orange, yellow , green , blue, red]
 */

/**
 * --------------------------------------------------/------------------------------------------------------------/-----------------------------------------------------------
 */
// let country = [
//   'bangladesh', 
//   'india', 
//   'japan',
//   'indonashia',
//   'armane',
//   'england',
//   'egpt'
// ];

// let revers =[];
// let countR  ;
// for (let i = country.length -1; i >= 0; i--){
//   countR = revers.push(country[i]);
// }
// console.log(revers);


//show this array all mumber in side 
// let num = [1, 2, 3, 4, 5, 6, 6, 7, 8];
// let revNum = [];
// let countR;

// // i ar num.length holo index hoira 8 count hoi 0to8 tahola boro ai jono i>=0 hoba
// for (let i = num.length -1; i >= 0; i--){
//   countR = revNum.push(num[i]);

// }
// console.log(revNum)

//array 1 by 1  ans show 
// let num = [1, 2, 3, 4,5,6,7, 8,9];

// for (let i = 0; i <= num.length -1; i++) {
  
//   console.log(num[i]);
// }



// for in loop 
// let fruits = ["apple", "mango", "banana", "orange"];
// let fruR=[];
// for (const fruit in fruits) {
//   fruits.reverse();

//   fruR.unshift(fruits[fruit])
// }

// console.log(fruR)

// fruits.reverse();// its a function and not use in for loop in side 
// for (const fru in fruits) {
  
  
//  let rev= fruits[fru];
  
  
//  console.log(rev)
// }

// ----------------/-----------------------------forof________________________________________________/

// let frutes = ['mango', 'banna', 'kala', 'anar', 'painapal'];
// let revFru = [];


// for (let frute of frutes) {
// revFru.reverse(frute)

// }

// console.log(revFru)

// -----------------------------------------whileloop----------------------------------------//

let fruits = ['apple', 'kola', 'anar', 'badana','jambura'];

let reversfruits= [];

let revcond = fruits.length - 1;
while (revcond >= 0) {
    reversfruits.push(fruits[revcond])

    revcond --;
}


console.log(reversfruits)