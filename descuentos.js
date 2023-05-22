const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const btn = document.querySelector("#calculate");
const resultP = document.querySelector("#result");

btn.addEventListener("click", calculatePriceWithDiscount);

function calculatePriceWithDiscount() {
  const price = inputPrice.value;
  const discount = inputDiscount.value;

  const newPrice = (price * (100 - discount)) / 100;

  resultP.innerText = `El precio con descuento es: $${newPrice}`;
}
