const openMenu = () => {
  var menu = document.getElementById("mobile-nav");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};
