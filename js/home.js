// step 1 add an event handler to  the add money button inside the from
// prevent page  reload after from submit
// step 2 Get money to be added to the amount balance

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // step 2 get money to be added to the amount balance

    const addMoneyInput = document.getElementById("input-add-money").value;

    // get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    // step 3 verify pin number
    // wrong way to validate pin number
    if (pinNumberInput === "1234") {
      console.log("adding money to your account");

      // step 4 get the current balance
      const balance = document.getElementById('account-balance').innerText;
      console.log(balance);

      //  step 5  add addMoneyInput with balance

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);

      const newBalance = addMoneyNumber + balanceNumber;

      //  step- 6: update  the balance in the ui/dom
      document.getElementById('account-balance').innerText = newBalance;
    } else {
      alert("filed to add money! please try agin.");
    }
  });
