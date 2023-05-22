const originalPrice = document.querySelector("#original");
const discount = document.querySelector("#discount");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

calculate.addEventListener("click", () => {
  if (originalPrice.value === "" || discount.value === "") {
    result.innerHTML = "Por favor, ingrese los datos";
    return;
  }

  if (originalPrice.value < 0 || discount.value < 0) {
    result.innerHTML = "Por favor, ingrese valores positivos";
    return;
  }

  const finalPrice = originalPrice.value * (1 - discount.value / 100);
  result.innerHTML = `Precio final: ${finalPrice}`;
});
