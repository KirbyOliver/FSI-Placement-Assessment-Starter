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

// Chocolate Chip

let ccCountCell = document.querySelector("#qty-cc")

// Choc Chip Plus Button
const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function(e) {
    cc = cc + 1;
    ccCountCell.textContent = cc;
})

// Choc Chip Minus Button
let ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(e) {
    cc = cc - 1;
    ccCountCell.textContent = cc;
    }
)

// Sugar

let sugarCountCell = document.querySelector('#qty-sugar')

// Sugar Plus Button
const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function(e) {
    sugar = sugar + 1;
    sugarCountCell.textContent = sugar;
})

// Sugar Minus Button
let sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function(e) {
    sugar = sugar - 1;
    sugarCountCell.textContent = sugar;
    }
)

