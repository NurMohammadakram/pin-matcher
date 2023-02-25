
document.getElementById('calculator').addEventListener('click', function (event) {
    const numberBtn = event.target
    const numberBtnValue = numberBtn.innerText;
    const inputedPin = getElementById('pin-for-check');
    if (isNaN(numberBtnValue)) {
        if (numberBtnValue == 'C') {
            inputedPin.value = '';
        }
        else if(numberBtnValue == '<') {
            const numberString = inputedPin.value;
            const stringArrow = numberString.split('');
            stringArrow.pop();
            const newString = stringArrow.join('');
            inputedPin.value = newString;
        }
    }
    else {
        const inputedPinValue = inputedPin.value;
        const newInputedPinValue = inputedPinValue + numberBtnValue;
        inputedPin.value = newInputedPinValue;
        // console.log('clicked by number btn', numberBtnValue);
    }
})