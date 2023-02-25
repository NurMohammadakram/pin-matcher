function getElementById(id) {
    const element = document.getElementById(id);
    return element;
}

function generatePin() {
    const pin = Math.round(Math.random()*10000);
    return pin;
}
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

let pinValue;
function matchPin () {
    const sendPin = pinValue;
    const sendPinValue = parseInt(sendPin);
    
    let inputedPin = getElementById('pin-for-check');
    let inputedPinValue = parseInt(inputedPin.value);
    inputedPin.value = '';

    const successMsg = getElementById('succes-msg');
    const faillureMsg = getElementById('faillure-msg')
    
    if (sendPinValue == inputedPinValue) {
        successMsg.style.display = 'block';
        faillureMsg.style.display = 'none';
    }
    else {
        faillureMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}