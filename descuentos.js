const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btnPrice = document.querySelector("#calculate");
const result = document.querySelector("#result");

btnPrice.addEventListener("click", calculatePriceWithDiscount);

function calculatePriceWithDiscount() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  const coupons = {
    hopefully_nobody_uses_this_coupon: 100,
    who_says_no_to_a_coupon: 50,
    yes_this_is_a_coupon: 10,
  };

  if (!price || !coupon) {
    result.innerText = "Debes ingresar un precio y un cupón";
    return;
  }

  let discount;

  // USING IF
  // if (coupon === "soy_un_cupon_de_100%") {
  //   discount = 100;
  // } else if (coupon === "who_says_no_to_a_coupon?") {
  //   discount = 50;
  // } else if (coupon === "is_this_a_coupon?") {
  //   discount = 25;
  // } else if (coupon === "yes_this_is_a_coupon") {
  //   discount = 10;
  // } else {
  //   result.innerText = `El cupón ${coupon} no es válido`;
  // }

  // USING SWITCH
  // switch (coupon) {
  //   case "soy_un_cupon_de_100%":
  //     discount = 100;
  //     break;
  //   case "who_says_no_to_a_coupon?":
  //     discount = 50;
  //     break;
  //   case "is_this_a_coupon?":
  //     discount = 25;
  //     break;
  //   case "yes_this_is_a_coupon":
  //     discount = 10;
  //     break;
  //   default:
  //     result.innerText = `El cupón ${coupon} no es válido`;
  //     return;
  // }

  if (coupons[coupon]) {
    discount = coupons[coupon];
  } else {
    result.innerText = `El cupón ${coupon} no es válido`;
  }

  const newPrice = (price * (100 - discount)) / 100;

  result.innerText = `El precio con descuento es de $${newPrice}`;
}
