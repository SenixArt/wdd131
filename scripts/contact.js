document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const countDisplay = document.getElementById("inquiry-count");

    // Initialize LocalStorage counter
    let inquiryCount = parseInt(localStorage.getItem("inquiryCounter") || "0", 10);
    if (countDisplay) {
        countDisplay.textContent = inquiryCount;
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            // Increment local storage count
            inquiryCount += 1;
            localStorage.setItem("inquiryCounter", inquiryCount.toString());
        });
    }
});
