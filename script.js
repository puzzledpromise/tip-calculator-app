let percButtons = document.querySelectorAll('.select-tip .btn');
let resetButton = document.getElementById('resetBtn');
let billInput = document.getElementById('amount');
let peopleNumberInput = document.getElementById('numberOfPeople');
let totalAmountLabel = document.getElementById('totalAmount');
let amountPerPersonLabel = document.getElementById('amountPerPerson');

let selectedPerc = 0;

function recalc() {
  let amount = Number(billInput.value);
  let totalTipAmount = (selectedPerc / 100) * amount;
  let numberOfPeople = Number(peopleNumberInput.value);
  let tipAmountPerPerson = (totalTipAmount / numberOfPeople).toFixed(2);

  let totalAmount = ((amount + totalTipAmount) / numberOfPeople).toFixed(2);
  totalAmountLabel.innerHTML = `$ ${totalAmount}`;
  amountPerPersonLabel.innerHTML = `$ ${tipAmountPerPerson}`;
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
  percButtons.forEach((perc) => {
    perc.classList.remove('activeBtn');
  });
  peopleNumberInput.value = 0;
  billInput.value = 0;
  recalc();
});

peopleNumberInput.addEventListener('change', (e) => {
  recalc();
});
