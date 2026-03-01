function multiply(num1 , num2) {
    if (typeof num1 !== "number" || typeof num2 !== 'number') {
        return 'please provide a number'
        
    }
    let mul = num1 * num2;
    return mul;
}
// const result = multiply(5, "7") ans show 35
// const result = multiply(5, "seven") ans show NaN
// const result = multiply([5, 1], [7]) ans show NaN
// const result = multiply(5) ans show NaN
// const result = multiply(5 + 7); ans show NaN
// const result = multiply(5 + 7, 5 + 8);  ans show 156;
// const result = multiply('5', "seven")
// console.log(result);


function fullName(first, second) {
    if(typeof first !== 'string'){
        return 'this is not a 1 string';
    }else if(typeof second !== 'string'){
        return 'this is not 2 stringg';
    }
    let full = first + ' '+ second;
    return full;
}
// const full = fullName('Azahar', 'Uddin')
// const full = fullName(1, 'Uddin')
// const full = fullName(5, 'uddin')
// console.log(full);
function getPrice(product){
    if (typeof product !== 'object') {
        return 'pless provide a object ';
    }
    const price = product.price;
    return price;
}

// const price = getPrice ({name: 'brash', price:35, color: 'blue'})
// const price = getPrice (5);
// console.log(price)
function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'please provide an array';
    }
    // console.log(typeof numbers) 
    const second = numbers[1];
    return second
}
const second = getSecond ([1, 25, 69])
console.log(second)