/**
 * objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function 
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pass the parameter(s)
 */

function sumofNumbers (numbers) {

    let counT = 0;
    for (const number of numbers) {
        counT = counT + number;
        console.log(number);

        
    }
    return counT
}

const numArray = [22, 33, 44, 55, 556];
const sum = sumofNumbers(numArray);
console.log('sum of number is', sum);