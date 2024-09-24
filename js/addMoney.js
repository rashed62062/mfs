


document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('added the event handler');
    // get money and the pin number
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;
    if(pinNumber === '1234'){

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance =  balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;


    }
    else{
        alert('failed to add money. please try agin later')
    }

});
