const submitButton = document.querySelector("#submit_btn");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorImg1 = document.querySelector(".error-img-1");
const errorMsg1 = document.querySelector(".error-msg-1");
const errorImg2 = document.querySelector(".error-img-2");
const errorMsg2 = document.querySelector(".error-msg-2");
const errorImg3 = document.querySelector(".error-img-3");
const errorMsg3 = document.querySelector(".error-msg-3");
const errorImg4 = document.querySelector(".error-img-4");
const errorMsg4 = document.querySelector(".error-msg-4");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstName.value.length === 0) {
    firstName.style.border = "2px solid red";
    errorImg1.style.visibility = "visible";
    errorMsg1.style.visibility = "visible";
  } else {
    firstName.style.border = "2px solid green";
    errorImg1.style.visibility = "hidden";
    errorMsg1.style.visibility = "hidden";
  }
  if (lastName.value.length === 0) {
    lastName.style.border = "2px solid red";
    errorImg2.style.visibility = "visible";
    errorMsg2.style.visibility = "visible";
  } else {
    lastName.style.border = "2px solid green";
    errorImg2.style.visibility = "hidden";
    errorMsg2.style.visibility = "hidden";
  }
  if (email.validity.typeMismatch || email.value.length === 0) {
    email.style.border = "2px solid red";
    errorImg3.style.visibility = "visible";
    errorMsg3.style.visibility = "visible";
  } else {
    email.style.border = "2px solid green";
    errorImg3.style.visibility = "hidden";
    errorMsg3.style.visibility = "hidden";
  }
  if (password.value.length === 0) {
    password.style.border = "2px solid red";
    errorImg4.style.visibility = "visible";
    errorMsg4.style.visibility = "visible";
  } else {
    password.style.border = "2px solid green";
    errorImg4.style.visibility = "hidden";
    errorMsg4.style.visibility = "hidden";
  }
});
