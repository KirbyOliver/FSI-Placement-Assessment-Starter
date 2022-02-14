// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Karen Oliver" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`


// My code starts here

// Gingerbread

let gbCountCell = document.querySelector("#qty-gb")

// Gingerbread Plus Button
const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function(e) {
    console.log('Gingerbread + button was clicked!');
    gb = gb + 1;
    gbCountCell.textContent = gb;
})

// Gingerbread Minus Button
let gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(e) {
    gb = gb - 1;
    gbCountCell.textContent = gb;
    }
)








// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons