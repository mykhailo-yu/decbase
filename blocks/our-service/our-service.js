let buttons = document.querySelectorAll(".our-services__filter-btn");
let wrapper = document.querySelector(".our-services__items");
let posts;
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    posts = data;
    resetItems();
});
function filterObjectByUsers(key) {
  return posts.filter((el) => el.userId == key);
}
buttons.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.id === "all") {
      resetItems();
    } else addItem(el.id);
    if (el.classList.contains("our-services__filter-btn--active")) {
      resetItems();
      changeActiveClass("all");
    } else changeActiveClass(el.id);
  });
});
function changeActiveClass(id) {
  let btn = document.getElementById(id);
  buttons.forEach((el) => {
    el.classList.remove("our-services__filter-btn--active");
  });
  btn.classList.add("our-services__filter-btn--active");
}
function addItem(btnId) {
  let filteredPosts = filterObjectByUsers(btnId);
  wrapper.innerHTML = "";
  for (let i = 0; i < filteredPosts.length; i++) {
    wrapper.innerHTML += `
        <div class="our-services__item">
                <div class="our-services__item-image">
                  <img src="blocks/our-service/img/ourService1.png" alt="Interior Design 1" />
                </div>
                <div class="our-services__item-title">User ${filteredPosts[i].userId}: ${filteredPosts[i].title}</div>
                <div class="our-services__item-description">
                  ${filteredPosts[i].body}
                </div>
              </div>
        `;
  }
}
function resetItems() {
  let users = [];
  function getUserById(id) {
    for (const user of posts) {
      if (user.userId == id) return user;
    }
    return null;
  }
  for (let i = 1; i < 4; i++) {
    users.push(getUserById(i));
  }
  wrapper.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    wrapper.innerHTML += `
        <div class="our-services__item">
                <div class="our-services__item-image">
                  <img src="blocks/our-service/img/ourService1.png" alt="" />
                </div>
                <div class="our-services__item-title">User ${users[i].userId}: ${users[i].title}</div>
                <div class="our-services__item-description">
                  ${users[i].body}
                </div>
              </div>
        `;
  }
}
