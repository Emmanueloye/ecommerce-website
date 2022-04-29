let returnType = document.querySelector("#return-type");
let productNameInput = document.querySelector(".prod-name-sec");
let modeOfRefund = document.querySelector("#mode-of-refund");
let bankDetails = document.querySelector(".bank-details-sec");
let exchangeSection = document.querySelector(".exchange-sec");
let replacementSection = document.querySelector(".replacement-sec");
let exchangeInput = document.querySelector("#exchange-type");

returnType.addEventListener("change", function () {
  if (this.value === "part return") {
    productNameInput.classList.add("show");
  } else {
    productNameInput.classList.remove("show");
  }
});

modeOfRefund.addEventListener("change", function () {
  if (modeOfRefund.value === "bank transfer") {
    exchangeSection.classList.remove("show");
    bankDetails.classList.add("show");
  } else if (modeOfRefund.value === "Exchange") {
    bankDetails.classList.remove("show");
    exchangeSection.classList.add("show");
  }
  // else {
  //   bankDetails.classList.remove("show");
  //   exchangeSection.classList.remove("show");
  // }
});

exchangeInput.addEventListener("change", function () {
  console.log(exchangeInput);
  if (exchangeInput.value === "another product") {
    replacementSection.classList.add("show");
  } else {
    replacementSection.classList.remove("show");
  }
});
