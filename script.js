// Declaring constants from HTML
const number = document.getElementById('number');
const numberDisplay = document.getElementById('country-number');
// Declaring variables
let phoneNumber = '';

// Function to format phone number input
function formatNumber() {
    // Get phone number input and assign to variable
    phoneNumber = number.value;
    // Remove any characters beside numeric
    phoneNumber = phoneNumber.replace(/\D/g,'');
    // Get length of phone number and add relevant formatting
    size = phoneNumber.length;
    if (size === 0) {
        // Adding formatting
        phoneNumber = '';
        // Assigning formatting to input value
        number.value = phoneNumber;
    } else if (size < 4) {
        // Adding formatting
        phoneNumber ='('+ phoneNumber;
        // Assigning formatting to input value
        number.value = phoneNumber;
    } else if (size < 7) {
        // Adding formatting
        phoneNumber = '( ' + phoneNumber.substring(0,3)+ ' ) ' + phoneNumber.substring(3,6);
        // Assigning formatting to input value
        number.value = phoneNumber;
    } else if (size <= 10) {
        // Adding formatting
        phoneNumber = '( ' + phoneNumber.substring(0,3)+ ' ) ' + phoneNumber.substring(3,6) + ' - ' + phoneNumber.substring(6,10);
        // Assigning formatting to input value
        number.value = phoneNumber;
    } else {
        // Removing formatting
        phoneNumber = phoneNumber;
        // Assigning formatting to input value
        number.value = phoneNumber;
    }
    // Calling function to update readonly value with country code
    updateNumber();
}

// Function to display unformatted phone number value with country code
function updateNumber() {
    // Logic to remove value if input is empty
    if (number.value != '') {
        // Get phone number input and assign to variable
        displayNumber = number.value;
        // Remove any characters beside numeric
        displayNumber = displayNumber.replace(/\D/g,'');
        // Assigning phone number to value display
        numberDisplay.innerText = `+1${displayNumber}`;
    } else {
        // Remove country code prefix if input is empty
        numberDisplay.innerText = '';
    }

}

// Event listeners
number.addEventListener('input', formatNumber)
