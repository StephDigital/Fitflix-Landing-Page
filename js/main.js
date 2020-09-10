//Create a constant variable for all the icons by using the class tab-item
const tabItems = document.querySelectorAll(".tab-item");
//Create a constant variable for all the content (detail) of the icons by using the class tab-content-item
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Function to show the content (detail) of each icon
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add a border to the current tab
  this.classList.add("tab-border");
  /*Get the content item (icon) from the DOM
    Create a content variable for the content (detail) of the icons
    use `#${this.id}-content` to get the id of the tab like "tab-3-content"*/
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  //Use the variable to show the content (detail)
  tabContentItem.classList.add("show");
}

//Function to remove the border of the tabs(icons)
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

//Function to remove the content of the tabs(icons)
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//Add a lister for the tab click (icons)
tabItems.forEach((item) => item.addEventListener("click", selectItem));
