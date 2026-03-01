function add(nm1, nm2){
    return nm1+ nm2;
}
function subtract(nm1, nm2){
    return nm1- nm2;
}
function multiply(nm1, nm2){
    return nm1* nm2;
}
function divide(nm1, nm2){
    return nm1/ nm2;
}

function calculator ( a, b, operation){
    if(operation === 'add'){
        const result = add (a, b);
        return result;
    }else if(operation ==='subtract'){
        const result = subtract (a, b);
        return result
    }else if(operation === 'divide'){
        return divide (a,b);
    }
    else{
        return 'only add, substract, multiply, divide operation is allowed.';
    }
}

let result1 = calculator(5, 6, 'divide');
console.log(result1);
