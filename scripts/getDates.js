const yearEl = document.getElementById("current-year-copyright");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

const lastModEl = document.getElementById("lastModified");
const lastMod = document.lastModified;
lastModEl.textContent = `Last Modification: ${lastMod}`;
