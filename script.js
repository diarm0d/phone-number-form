// one - input text formatted to the us standard format
const number = document.getElementById('number');
const numberDisplay = document.getElementById('country-number');

console.log(number);

let phoneNumber = '';

function formatNumber() {
    phoneNumber = number.value;
    phoneNumber = phoneNumber.replace(/\D/g,'');
    size = phoneNumber.length;
    if (size === 0) {
        phoneNumber = '';
        number.value = phoneNumber;
    } else if (size < 4) {
        phoneNumber ='('+ phoneNumber;
        number.value = phoneNumber;
    } else if (size < 7) {
        phoneNumber = '( ' + phoneNumber.substring(0,3)+ ' ) ' + phoneNumber.substring(3,6);
        number.value = phoneNumber;
    } else if (size <= 10) {
        phoneNumber = '( ' + phoneNumber.substring(0,3)+ ' ) ' + phoneNumber.substring(3,6) + ' - ' + phoneNumber.substring(6,10);
        number.value = phoneNumber;
    } else {
        phoneNumber = phoneNumber;
        number.value = phoneNumber;
    }
        updateNumber();
    }

function unformatNumber(n) {
    n = n.replace(/\D/g,'');
    return n
}
    
function updateNumber() {
    if (number.value != '') {
        displayNumber = number.value;
        displayNumber = displayNumber.replace(/\D/g,'');
        numberDisplay.innerText = `+1${displayNumber}`;
    } else {
        numberDisplay.innerText = '';
    }

}

    // event listener - onchange

    // format update

// two - phone numbers longer that 10 digits no formatting

// readonly text with unformated number and country code

// pressing backspace or removing charaters in the input phone format should pdated accodingly

// Event listeners
number.addEventListener('input', formatNumber)
