

document.getElementById('generate-pin').addEventListener('click', function () {
    pinValue= getPin();
    const displyPin = document.getElementById('display-pin')
    displyPin.value = pinValue;
})

document.getElementById('pin-match').addEventListener('click', function () {
    matchPin();
})