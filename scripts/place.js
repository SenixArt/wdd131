document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temp = 10;
const windSpeed = 10;

function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

const windchillElement = document.querySelector("#windchill");

if (temp <= 10 && windSpeed > 4.8) {
    windchillElement.textContent = calculateWindChill(temp, windSpeed) + " °C";
} else {
    windchillElement.textContent = "N/A";
}
