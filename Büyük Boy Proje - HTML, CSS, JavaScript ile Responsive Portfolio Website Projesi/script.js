// let menuItems = document.getElementById('menuItems')

// menuItems.style.maxHeight = '0px'
/*
function menuToggle() {

    if(menuItems.style.maxHeight == '0px') {
        menuItems.style.maxHeight = '200px'
    } else {
        menuItems.style.maxHeight = '0px'
    }
}
*/
function menuToggle() {
  let menuItems = document.getElementById("menuItems");
  if (menuItems.style.display === "flex") {
    menuItems.style.display = "none";
  } else {
    menuItems.style.display = "flex";
  }
}