// Dynamic current year for footer copyright
const currentYearSpan = document.getElementById("currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Dynamic last modified date for footer
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;