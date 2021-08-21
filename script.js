const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector('#cash-given');
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll('.no-of-notes');
const availableNotes = [2000, 500, 100, 20, 10, 5 ,1];

checkButton.addEventListener("click", function validateBillandCash(){
  // hideMessage();
  if (billAmount.value > 0) {
    if(cashGiven.value >= billAmount.value){
      const returnAmount = cashGiven.value - billAmount.value;
      calculateChange(returnAmount);

    } else {
      showMessage("cash provided should be more than bill amount")
    }

  } else{
      showMessage("Bill amt should be greater than 0")
  }
});

function hideMessage(){
  message.style.display = 'none';
}

function calculateChange(returnAmount) {
  message.innerText = 'The amount to be returned ' + returnAmount;
  for(let i=0; i< availableNotes.length; i++){
    const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
    returnAmount %= availableNotes[i];
    // returnAmount = returnAmount % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }

}

function showMessage(msg) {
    message.style.display = 'block';
    message.innerText = msg;
}