let age = 13;
let price = 500;
// 10% discount
if(age <= 12){
    console.log('you can it free ');
}else if(age >= 60){
    let discount = price * 50 / 100;
    let payamount = price - discount;
    console.log("50% off discount payable amount: ", payamount);
}
else{
    console.log('pay fast')
}