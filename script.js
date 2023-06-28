// Add active class to the clicked submenu
var menuItems = document.querySelectorAll("#menu li");

menuItems.forEach(function(item) {
  item.addEventListener("click", function() {
    menuItems.forEach(function(item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
