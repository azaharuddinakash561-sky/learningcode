document.getElementById('cashOut')
    .addEventListener('click', function(event){
    event.preventDefault();
    const inputCash = document.getElementById("inputCashOut").value;
    const balanceNumber  = parseFloat(inputCash)
    // console.log(inputCash);
    
    const pininputCash = document.getElementById("input_cash_out-pin").value;
    // console.log(pininputCash);
    
    if( pininputCash === "09"){
        const amount = document.getElementById('current-balance').innerText
        const amountNumber = parseFloat(amount)
        // redus the casss 
        const cashoutMoney = amountNumber - balanceNumber;
         document.getElementById("current-balance").innerText = cashoutMoney;
    }else{
        alert('wrong')
    }
})