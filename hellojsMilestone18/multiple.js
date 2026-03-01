// 18_5 Multiple condition Logical Operators(&&, ||)
let  salare = 21500;
const bcs = true;
let height = 5.4;
let isCar = true;

// or|| use
// if ((salare > 200000 && bcs == true) || (height <= 5.4 && isCar == true)){
//     console.log("is it ok for Marrage")
// }

// else{
//     console.log("not this time")
// }
// and use && all condition is full fill
if ((salare > 200000 && bcs == true) && (height <= 5.4 && isCar == true)){
    console.log("is it ok for Marrage")
}

else{
    console.log("not this time")
}

// || use multipal time 
if ((salare > 200000 || bcs == true) || (height <= 5.4 || isCar == true)){
    console.log("is it ok for Marrage")
}

else{
    console.log("not this time")
}