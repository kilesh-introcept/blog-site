const openMenu = () => {
  var menu = document.getElementById("mobile-nav");
  console.log(menu);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};
