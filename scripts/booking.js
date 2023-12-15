/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyRate = 35;
var dayCounter = 0;

document.addEventListener ('DOMContentLoaded', function () {


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDay(element) {
    if (element.classList.contains('clicked')) {
        element.classList.remove('clicked');
        dayCounter--;
    } else {
        element.classList.add('clicked');
        dayCounter++;
    }
    calculate();
}
var dayButtons = document.querySelectorAll('.day-selector li');
dayButtons.forEach(function (day) {
    day.addEventListener('click', function () {
        toggleDay(day);
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', function () {
            dayButtons.forEach(function (day) {
                day.classList.remove('clicked');
            });
            dayCounter = 0;
            calculate();
        });
    }



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfButton = document.getElementById('half');
    var fullButton = document.getElementById('full');
    if (halfButton && fullButton) {
        halfButton.addEventListener('click', function () {
            dailyRate = 20;
            halfButton.classList.add('clicked');
            fullButton.classList.remove('clicked');
            calculate();
        });

        fullButton.addEventListener('click', function () {
            dailyRate = 35;
            fullButton.classList.add('clicked');
            halfButton.classList.remove('clicked');

            calculate();
        });
    }


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    var calculatedCost = dailyRate * dayCounter;
    var calculatedCostElement = document.getElementById('calculated-cost');
    if (calculatedCostElement) {
        calculatedCostElement.innerHTML = calculatedCost;
    }
}
});