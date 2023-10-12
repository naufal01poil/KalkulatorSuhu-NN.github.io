document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperature");
    const toFahrenheitButton = document.getElementById("toFahrenheit");
    const toCelsiusButton = document.getElementById("toCelsius");
    const resultValue = document.getElementById("resultValue");

    toFahrenheitButton.addEventListener("click", function() {
        const celsius = parseFloat(temperatureInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        resultValue.textContent = `${fahrenheit.toFixed(2)} derajat Fahrenheit`;
    });

    toCelsiusButton.addEventListener("click", function() {
        const fahrenheit = parseFloat(temperatureInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        resultValue.textContent = `${celsius.toFixed(2)} derajat Celsius`;
    });
});
