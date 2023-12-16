/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costDay = 40;
var cost = 0;
var numDays = 0;

var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

const days = [monday, tuesday, wednesday, thursday, friday]

var full = document.getElementById("full");
var half = document.getElementById("half");

var clear = document.getElementById("clear-button");

function recalculate(){
    var sum = 0;
    if(full.classList.contains("clicked")){
        cost = costDay;
    }else if(half.classList.contains("clicked")){
        cost = costDay / 2;
    }
    for(let i = 0; i < days.length; i++){
        if(days[i].classList.contains("clicked")){
            sum ++;
        }
    }
    let calculatedCost = cost * sum;
    document.getElementById("calculated-cost").innerHTML = calculatedCost;
}
function addClicked(button) {
    if(button == full){
        if (button.classList.contains("clicked")) {
        } else {
            button.classList.add("clicked");
            half.classList.remove("clicked");
        }
    }else if(button == half){
        if (button.classList.contains("clicked")) {
        } else {
            button.classList.add("clicked");
            full.classList.remove("clicked");
        }
    }else{
        if (button.classList.contains("clicked")) {
            button.classList.remove("clicked");
        } else {
            button.classList.add("clicked");
        }
    }
    
    recalculate();
}
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
monday.addEventListener("click", function(){addClicked(monday);});
tuesday.addEventListener("click", function(){addClicked(tuesday);});
wednesday.addEventListener("click", function(){addClicked(wednesday);});
thursday.addEventListener("click", function(){addClicked(thursday);});
friday.addEventListener("click", function(){addClicked(friday);});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

full.addEventListener("click", function(){addClicked(full);});
half.addEventListener("click", function(){addClicked(half);});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


