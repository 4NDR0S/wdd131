// año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// fecha de modificación
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// ---------------- WEATHER DATA (STATIC FOR NOW) ----------------
const temperature = 22; // °C (Lima)
const windSpeed = 12; // km/h (valor estático)


document.getElementById("temperature").textContent = temperature;
document.getElementById("wind-speed").textContent = windSpeed;

// win chill function
function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}


let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("wind-chill").textContent = windChill;
