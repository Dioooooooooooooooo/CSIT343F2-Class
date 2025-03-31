const container = document.querySelector("#container");
const text = document.querySelector("#text");
const darkThemeBtn = document.querySelector("#themeDark");
const redThemeBtn = document.querySelector("#themeRed");
const greenThemeBtn = document.querySelector("#themeGreen");
const resetThemeBtn = document.querySelector("#themeReset");

darkThemeBtn.addEventListener("click", () => {
  container.style.backgroundColor = "#080808";
  text.style.color = "#ffffff";
  text.style.fontFamily = "Bradley Hand";
});

redThemeBtn.addEventListener("click", () => {
  container.style.backgroundColor = "#ff0000";
  text.style.color = "#ffffff";
  text.style.fontFamily = "Impact";
});

greenThemeBtn.addEventListener("click", () => {
  container.style.backgroundColor = "#008000";
  text.style.color = "#ffffff";
  text.style.fontFamily = "Courier New";
});

resetThemeBtn.addEventListener("click", () => {
  container.style.backgroundColor = "#d2d2d3";
  text.style.color = "#000000";
  text.style.fontFamily = "Arial";
});
