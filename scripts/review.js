document.addEventListener("DOMContentLoaded", () => {
  let count = parseInt(localStorage.getItem("reviewCounter") || "0", 10);
  count += 1;
  localStorage.setItem("reviewCounter", count.toString());

  const countDisplay = document.getElementById("reviewCount");
  if (countDisplay) {
    countDisplay.textContent = count;
  }
});
