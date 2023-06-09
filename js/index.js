// JavaScript code to handle form submission and display sandwich details
const form = document.getElementById('sandwich-form');
const sandwichDetails = document.getElementById('sandwich-details');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const bread = document.getElementById('bread').value;
  const meats = [...document.querySelectorAll('input[name="meat"]:checked')].map(checkbox => checkbox.value);
  const cheese = document.querySelector('input[name="cheese"]:checked').value;
  const veggies = [...document.querySelectorAll('input[name="veggies"]:checked')].map(checkbox => checkbox.value);

  // Display sandwich details
  sandwichDetails.innerHTML = `
    <p>Bread: ${bread}</p>
    <p>Meat: ${meats.join(', ')}</p>
    <p>Cheese: ${cheese}</p>
    <p>Veggies: ${veggies.join(', ')}</p>
  `;
});