// document.getElementById('cashOut')
//     .addEventListener('click', function(event){
//     event.preventDefault();
//     const inputCash = document.getElementById("inputCashOut").value;
//     const balanceNumber  = parseFloat(inputCash)
//     // console.log(inputCash);
    
//     const inputCashOutPin = document.getElementById("input_cash_out_pin").value;
    
    
//     if( inputCashOutPin === "55"){
//         const amount = document.getElementById("current-balance").innerText;
//         const amountNumber = parseFloat(amount)
//         // redus the casss 
//         const cashoutMoney = amountNumber - balanceNumber;
//          document.getElementById("current-balance").innerText = cashoutMoney;
//          console.log(cashoutMoney);
         
//     }else{
//         alert('wrong')
//     }
// })
document.getElementById('btn_cashOut').addEventListener('click', function(event){
    event.preventDefault();
    
    const amountInputOut = document.getElementById("amountInputOut").value;
    const aIOutNumber = parseFloat(amountInputOut);
    const pin = document.getElementById('pin').value;
    const pinNumber = parseFloat(pin)

    if(pinNumber === 2 ){
        const sBlance = document.getElementById('show_balance').innerText;
        const sBlanceNumber = parseFloat(sBlance.replaceAll(',', ''));
        const update = sBlanceNumber - aIOutNumber;
        document.getElementById('show_balance').innerText = update;

    }else{
        alert('wrong pin')
    }
})