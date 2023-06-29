const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");
const passField =  form.querySelector(".create-password");
const passInput = form.querySelector(".password");
const cPassField = form.querySelector(".confirm-password"); 
const cPassInput = cPassField.querySelector(".cPassword");




// Email validation
function checkEmail () {
   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if(!emailInput.value.match(emailPattern)) {
      return emailField.classList.add("invalid") // adding invalid class if email value do not matched
   }
   emailField.classList.remove("invalid") // removing invalid class if email value matched with emailPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input"); // getting parent element of eye icon and selecting the password input
       
       if(pInput.type === "password") {
         eyeIcon.classList.replace("bxs-hide", "bxs-show");
         return (pInput.type = "text");
       }
       eyeIcon.classList.replace("bxs-show", "bxs-hide");
        pInput.type = "password";
    })
})


// Calling Function on Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault() //preventing form submiting
    checkEmail();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
})


