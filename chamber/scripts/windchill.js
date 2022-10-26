
const temperature = document.getElementById('temp').textContent;
const windSpeed = document.getElementById('winds').textContent;

if (temperature > 50 && windSpeed <= 3){

    document.getElementById('windch').textContent = "N/A";
}
else {
    const windChill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16));
    const windChillFinal= Math.round(windChill);

    document.getElementById('windch').textContent = windChillFinal;
}