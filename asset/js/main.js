/**
 * Function to switch image based on button-color click
 * @param {string} dataColor
 * @returns {string} color
 */
const productImg = document.getElementById("product_img");
const button = document.querySelectorAll("button.btn_color");

// Loop through the array of buttons with className btn_color
button.forEach((el, i) => {
  // Add event listener {click} to each button
  el.addEventListener("click", (e) => {
    const index = el.getAttribute("data-item");
    e.preventDefault();
    // Get the data-color attribute from the button
    const color = e.target.getAttribute("data-color");
    // Change the image src to the data-color attribute
    productImg.setAttribute("src", `img/iphone_${color}.jpeg`);
    // Remove class active from other button onClick of a button
    removeSelected(button);
    // Add a class active onClick of a button
    el.classList.add("active");
  });
});

const removeSelected = (items) => {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
};
