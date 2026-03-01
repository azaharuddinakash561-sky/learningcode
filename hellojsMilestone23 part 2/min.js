let numberArray = [20000, 230000, 505000, 5000000, 600000, 700000, 100000]


function chipNumberFinder(numbers) {
    let count = numbers[0];
    for (const num of numbers) {
        if(num < count){
            count = num;
        }
    }
    return count;
}
let cheap = chipNumberFinder(numberArray)
console.log('this is the low Price',cheap);
