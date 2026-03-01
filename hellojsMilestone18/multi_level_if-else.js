/**
 * 18.6 Multi level If-else if-else condition
 */


let price = 5000;

if (price >= 5000){
    // 10% discount
    const discount = price * 10 / 100;
    const payBleAmount = price - discount; 
    console.log(payBleAmount);
}
else if (price >= 4000){
    // 5% discount
    const discount = price * 5 / 100;
    const payBleAmount1 = price - discount; 
    console.log(payBleAmount1);
}
else{
    console.log("no amount allow")
}