const cartSection = document.querySelector("#cart");

const cart = [
  {id: 1, name: "Backpack", price:"60"},
  {id: 2, name: "Water Bottle", price:"28"},
  {id: 3, name: "Notebook", price:"12"}
]

function cartListTemplate(cart) {
    return `<li>${cart.name} - $${cart.price}</li>`;
};

function renderCartList(cart) {
    const cartListHTML = cart.map(cartListTemplate).join("");
    console.log("Cart: ", cart);
    cartSection.insertAdjacentHTML('afterbegin', cartListHTML);
};

renderCartList(cart);