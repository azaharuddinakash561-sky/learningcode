// add an event handler to the add money button inside the form
document.getElementById('addMoney')
.addEventListener('click', function(event){
    event.preventDefault();

    // sep2 get money to be added to money
    const add_moneyInput = document.getElementById('inputAddMoney').value
    // get in the pin number
    const pinNumberInput = document.getElementById('input_pin_number').value
    const pinNum = parseFloat(pinNumberInput)
  
  // step 3 verify pin number 
    // this is a wrong way to validate
    if(pinNumberInput === 1234 ){
        
        // step 4 current balance
        const balance = document.getElementById('current-balance').innerText;

        // step-5 add add_moneyInput with balance
        const addMoneyNumber =  parseFloat(add_moneyInput);
        // console.log(typeof add_moneyInput)
        const balanceNumber = parseFloat(balance)
        
        const newBalance =   balanceNumber + addMoneyNumber;
        // console.log(newBalance);
        document.getElementById('current-balance').innerText = newBalance

    }else{
        alert('failed it')
    }
})