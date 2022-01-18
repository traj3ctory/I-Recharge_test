const productImg = document.getElementById("product_img");
const button = document.querySelectorAll("button.btn_color");

button.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const color = e.target.getAttribute("data-color");
    productImg.setAttribute("src", `img/iphone_${color}.jpeg`);
  });
});
