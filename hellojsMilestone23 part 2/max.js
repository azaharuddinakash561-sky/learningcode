let disha = 56;
let salman = 95;

if (disha > salman ) {
    console.log('disha will get the straberry')
} else {
    console.log('salman will eat the strawberry')
}
function getMax(num1, num2) {
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
let max1 = getMax (56, 79)
let max2 = getMax (56, 98)
let ultimatemax = getMax (max1, max2)
// console.log('max to two is : ', max);
console.log('max to two is : ', ultimatemax);
