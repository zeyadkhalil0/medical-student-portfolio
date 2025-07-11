let menu_open = document.getElementById("menu");
let list = document.getElementById("list");
let background = document.getElementById("blur-background");
list.classList.add("hide");

menu_open.addEventListener("click", (ev) => {
  list.classList.toggle("hide");
  background.classList.toggle("blur");

  if (menu_open.classList.contains("fa-bars")) {
    menu_open.classList.remove("fa-bars");
    menu_open.classList.add("fa-xmark");
  } else {
    menu_open.classList.remove("fa-xmark");
    menu_open.classList.add("fa-bars");
  }
});
