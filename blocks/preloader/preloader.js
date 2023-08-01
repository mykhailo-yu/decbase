const preloaderWrapper = document.querySelector(".preloader__wrapper");
const preloader = document.querySelector(".preloader");
const items = document.querySelectorAll(".preloader__item");
const itemArr = Array.prototype.slice.call(items);
const itemSize = items[0].clientWidth;
const itemGap = (preloader.clientWidth - 4 * itemSize) / 3;
const animDelay = 300;
const animDuration = animDelay * 12;
const repeat = setInterval(anim, animDuration);
setTimeout(hidePreloader, 5000);
function hidePreloader() {
  preloaderWrapper.style.opacity = "0";
  setTimeout(() => {
    preloaderWrapper.style.display = "none";
  }, 300);
  clearInterval(repeat);
}
anim();
function anim() {
  function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  itemArr[0].style.top = `calc(50% - ${itemSize}px/2)`;
  itemArr[1].style.top = `calc(50% - ${itemSize}px/2 + ${itemSize}px + ${itemGap}px)`;
  setTimeout(() => {
    itemArr[1].style.left = `calc((${itemSize}px + ${itemGap}px))`;
  }, animDelay);
  setTimeout(() => {
    itemArr[1].style.top = `calc(50% - ${itemSize}px/2)`;
    itemArr[2].style.top = "0";
  }, animDelay * 2);
  setTimeout(() => {
    itemArr[2].style.left = `calc((${itemSize}px + ${itemGap}px)*2)`;
  }, animDelay * 3);
  setTimeout(() => {
    itemArr[2].style.top = `calc(50% - ${itemSize}px/2)`;
    itemArr[3].style.top = `calc(50% - ${itemSize}px/2 + ${itemSize}px + ${itemGap}px)`;
  }, animDelay * 4);
  setTimeout(() => {
    itemArr[3].style.left = `calc((${itemSize}px + ${itemGap}px)*3)`;
  }, animDelay * 5);
  setTimeout(() => {
    itemArr[3].style.top = `calc(50% - ${itemSize}px/2)`;
    itemArr[4].style.top = "0";
  }, animDelay * 6);
  setTimeout(() => {
    itemArr[4].style.left = `calc((${itemSize}px + ${itemGap}px)*2)`;
  }, animDelay * 7);
  setTimeout(() => {
    itemArr[2].style.top = `calc(50% - ${itemSize}px/2 + ${itemSize}px + ${itemGap}px)`;
    itemArr[4].style.top = `calc(50% - ${itemSize}px/2)`;
  }, animDelay * 8);
  setTimeout(() => {
    itemArr[2].style.left = `calc((${itemSize}px + ${itemGap}px))`;
  }, animDelay * 9);
  setTimeout(() => {
    itemArr[1].style.top = "0";
    itemArr[2].style.top = `calc(50% - ${itemSize}px/2)`;
  }, animDelay * 10);
  setTimeout(() => {
    itemArr[1].style.left = "0";
  }, animDelay * 11);
  setTimeout(() => {
    itemArr[1].style.top = `calc(50% - ${itemSize}px/2)`;
    itemArr[0].style.top = `calc(50% - ${itemSize}px/2 + ${itemSize}px + ${itemGap}px)`;
    swap(itemArr, 0, 1);
    swap(itemArr, 3, 4);
  }, animDelay * 12);
}
