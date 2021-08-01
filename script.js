let percButtons = document.querySelectorAll('.select-tip .btn');
let resetButton = document.getElementById('resetBtn');
let billInput = document.getElementById('amount');
let peopleNumberInput = document.getElementById('numberOfPeople');
let totalAmountLabel = document.getElementById('totalAmount');

let selectedPerc = 0;

function recalc() {
  let amount = Number(billInput.value);
  let totalTipAmount = (selectedPerc / 100) * amount;
  let numberOfPeople = Number(peopleNumberInput.value);

  let totalAmount = ((amount + totalTipAmount) / numberOfPeople).toFixed(2);
  totalAmountLabel.innerHTML = `$ ${totalAmount}`;
  console.log(totalAmount);
}

// Event Listeners

percButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    selectedPerc = Number(e.target.value);

    percButtons.forEach((perc) => {
      perc.classList.remove('activeBtn');
    });
    e.target.classList.add('activeBtn');
    recalc();
  });
});

resetButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

peopleNumberInput.addEventListener('change', (e) => {
  console.log('Change!');
  recalc();
});
