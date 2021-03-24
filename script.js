// Declaring constants from HTML
const form = document.getElementById('number-form');
const number = document.getElementById('number');
const value = document.getElementById('value');
const numberDisplay = document.getElementById('country-number');

// Declaring global variables
let phoneNumber = '';
let isValid = false;

function unformatNumber() {
    // Get phone number input and assign to variable
    phoneNumber = number.value;
    // Remove any characters beside numeric
    phoneNumber = phoneNumber.replace(/\D/g,'');
    // Return variable
    return phoneNumber;
}

// Function to format phone number input
function formatNumber() {
    // Reset CSS to valid
    number.style.borderBottom = ' 1px solid rgba(33, 243, 149, 0.8)';
    unformatNumber();
    // Get length of phone number and add relevant formatting
    size = phoneNumber.length;
    if (size === 0) {
        // Adding formatting
        phoneNumber = '';
        // Assigning formatting to input value
        number.value = phoneNumber;
    } else if (size < 4) {
        // Adding formatting
        phoneNumber ='(' + phoneNumber + ')';
        // Assigning formatting to input value
        number.value = phoneNumber;
    } else if (size < 7) {
        // Adding formatting
        phoneNumber = '(' + phoneNumber.substring(0,3)+ ') ' + phoneNumber.substring(3,6);
        // Assigning formatting to input value
        number.value = phoneNumber;
    } else if (size <= 10) {
        // Adding formatting
        phoneNumber = '(' + phoneNumber.substring(0,3)+ ') ' + phoneNumber.substring(3,6) + ' - ' + phoneNumber.substring(6,10);
        // Assigning formatting to input value
        number.value = phoneNumber;
    } else {
        // Removing formatting
        phoneNumber = phoneNumber;
        // Assigning formatting to input value
        number.value = phoneNumber;
        // Update css for invalid length
        number.style.borderBottom = ' 1px solid rgba(243, 33, 68, 0.8)';
    }
    // Calling function to update readonly value with country code
    updateNumber();
}

// Function to display unformatted phone number value with country code
function updateNumber() {
    // Logic to remove value if input is empty
    if (number.value != '') {
        unformatNumber();
        // Get phone number input and assign to variable
        displayNumber = phoneNumber;
        // Assigning phone number to value display
        numberDisplay.innerText = `+1${displayNumber}`;
    } else {
        // Remove country code prefix if input is empty
        numberDisplay.innerText = '';
    }
}

// Restore form after input submit
function resetForm() {
    number.disabled = false;
    number.style.borderBottom = ' 1px solid rgba(33, 243, 149, 0.8)';
    value.innerText = 'Value: ';
    number.setAttribute('placeholder', 'Start typing a phone number');
}

// Store input form entry to local stroage
function storeFormData() {
    // Set item in local storage
    localStorage.setItem('phone number', phoneNumber);
    // Reset form inputs
    form.reset();
    number.setAttribute('placeholder', '');
    numberDisplay.innerText = '';
    value.innerText = 'Thanks for submitting your number.';
    number.disabled = true;
    isValid = false;
    phoneNumber = '';
    number.style.borderBottom = ' 1px solid rgba(197, 216, 208, 0.8)';
    // Set timeout to re enable form after submit
    setTimeout(resetForm, 2000);
}

// Validate form entry 
function validateForm() {
    if (phoneNumber.length < 10) {
        // Alert user that entry is too short
        alert('The phone number you entered is too short');
    } else if (phoneNumber.length === 10) {
        // Update isValid variable to true
        isValid = true;
    } else {
        // Alert user that entry is too long
        alert('The phone number you entered is too long');
    }
    // Return variable isValid
    return isValid;
}

// Process form data and prevent default event action
function processFormData(e) {
    // Prevent default form submit
    e.preventDefault();
    // validte form number entry
    validateForm();
    // If form input is valid call store form data function
    if (isValid) {
        storeFormData();
    }
}

function deleteNumber(e) {
    var key = e.key;
    if (key === "Backspace" || key === "Delete") {
        if (number.value[number.value.length - 1] === ')') {
            number.setSelectionRange(number.value.length - 1, number.value.length - 1);
        }
    }
}

// Event listeners
number.addEventListener('input', formatNumber);
number.addEventListener('keydown', deleteNumber);
form.addEventListener('submit', processFormData);
