// 1. Footer: Año actual y última modificación
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// 2. Variables estáticas del clima
const temp = 10; // Temperatura en Celsius
const windSpeed = 15; // Velocidad del viento en km/h

// 3. Función de Wind Chill (fórmula métrica en una sola línea)
function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

// 4. Lógica condicional: Validar si aplica o no el cálculo
const windChillElement = document.getElementById("windchill");

if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}
