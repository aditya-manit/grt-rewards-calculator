// Listen for submit
/*
document.getElementById("loan-form").addEventListener("submit", computeResults);
const button = document.querySelector('.button');
function computeResults(e) {
  // UI

  const UIamount = document.getElementById("amount").value;
  const UIinterest = document.getElementById("interest").value;
  const UIyears = document.getElementById("years").value;

  // Calculate

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results

  document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "%" + totalInterest;

  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

}


button.addEventListener('click', (e) => {
	console.log('Calculating...');
	// show loader
	button.classList.add('loading');
	
	// set timeout
	setTimeout(computeResults, 2000);
	
	// prevent page from reloading on submit
	e.preventDefault();
}); */


//new code

const simpleInterest = document.querySelector('loan-form');
const button = document.querySelector('.button');

function calculateResults(e) {
	// ui elements
	const principal = document.getElementById("amount");
	const rate = document.getElementById("interest");
	const time = document.getElementById("years");
	// formula variables
	const p = parseFloat(principal.value);
	const r = parseFloat(rate.value);
	const t = parseFloat(time.value);
	
	// calculate total interest
	const interest = (p*t*r/100);
	// calculate monthly payment
	const payment = ((interest + p) / (t * 12)).toFixed(2);
	// calculate total amount paid
	const total = (interest + p).toFixed(2);
	
	
  document.getElementById("monthlyPayment").innerHTML = "$" + payment;

  document.getElementById("totalInterest").innerHTML = "%" + interest;

  document.getElementById("totalPayment").innerHTML = "$" + total;
		// hide loader
		button.classList.remove('loading');
	
	
}

button.addEventListener('click', (e) => {
	console.log('Calculating...');
	// show loader
	button.classList.add('loading');
	
	// set timeout
	setTimeout(calculateResults, 2000);
	
	// prevent page from reloading on submit
	e.preventDefault();
});

