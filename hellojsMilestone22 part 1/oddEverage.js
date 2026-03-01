// create a funciton takes and array as parameter 
// give me the average of the odd numbers in the array


function oddAvarage(numbers) {
    let odd = [];
    for (const number of numbers) {
        
        if (number % 2 === 1) {
            odd.push(number);  
        }    
    }
    console.log(odd);
    let sum = 0;
    for (const number of odd) {
        sum = sum + number;
    }

    console.log(sum);
    const count = odd.length;
    console.log(count);
    const ave = sum / count;
    return ave
    
    
    
}
const numbers = [1, 3, 555, 4, 6, 7, 22, 10, 20];
const ave = oddAvarage(numbers)
console.log('this is the averagee Numbar : ', ave);

