let timer;
function askUser() {
  let wrapper = document.querySelector(".is-user-here");
  let button = document.querySelector(".is-user-here__button");
  wrapper.style.display = "block";
  setTimeout(() => {
    wrapper.style.opacity = "1";
  }, 200);
  let noAnswerTimer = setTimeout(closeWindow, 5000);
  button.addEventListener("click", (event) => {
    clearTimeout(noAnswerTimer);
    resetTimer();
    setTimeout(() => {
      wrapper.style.display = "none";
    }, 200);
    wrapper.style.opacity = "0";
  });
}
function closeWindow() {
  window.close();
  alert("Window was closed!");
}
function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(askUser, 60000);
}
window.addEventListener("load", () => {
  document.addEventListener("click", resetTimer);
  document.addEventListener("scroll", resetTimer);
  document.addEventListener("keydown", resetTimer);
  document.addEventListener("mousemove", resetTimer);
  resetTimer();
});
