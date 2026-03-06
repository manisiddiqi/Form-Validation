let loginForm = document.getElementById("loginForm");

let email = document.getElementById("email");
let contact = document.getElementById("contact");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submitBtn = document.getElementById("submitBtn");

let emailError = document.getElementById("emailError");
let contactError = document.getElementById("contactError");
let passwordError = document.getElementById("passwordError");
let confirmError = document.getElementById("confirmError");

submitBtn.disabled = true; // Start me disabled


// 🔥 Function to check full form validity
function checkFormValidity(){
    if(
        email.value.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
        /^[0-9]{10}$/.test(contact.value) &&
        password.value.length >= 6 &&
        password.value === confirmPassword.value
    ){
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}


// 🔹 Email Validation
email.addEventListener("input", function(){
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email.value)){
        emailError.innerText = "Invalid email format";
        email.classList.add("error-border");
        email.classList.remove("success");
    } else {
        emailError.innerText = "";
        email.classList.add("success");
        email.classList.remove("error-border");
    }

    checkFormValidity();
});


// 🔹 Contact Validation
contact.addEventListener("input", function(){
    if(!/^[0-9]*$/.test(contact.value)){
        contactError.innerText = "Only numbers allowed";
        contact.classList.add("error-border");
        contact.classList.remove("success");
    }
    else if(contact.value.length !== 10){
        contactError.innerText = "Must be 10 digits";
        contact.classList.add("error-border");
        contact.classList.remove("success");
    }
    else{
        contactError.innerText = "";
        contact.classList.add("success");
        contact.classList.remove("error-border");
    }

    checkFormValidity();
});


// 🔹 Password Validation
password.addEventListener("input", function(){
    if(password.value.length < 6){
        passwordError.innerText = "Minimum 6 characters";
        password.classList.add("error-border");
        password.classList.remove("success");
    }
    else{
        passwordError.innerText = "";
        password.classList.add("success");
        password.classList.remove("error-border");
    }

    checkFormValidity();
});


// 🔹 Confirm Password Check
confirmPassword.addEventListener("input", function(){
    if(password.value !== confirmPassword.value){
        confirmError.innerText = "Passwords do not match";
        confirmPassword.classList.add("error-border");
        confirmPassword.classList.remove("success");
    }
    else{
        confirmError.innerText = "";
        confirmPassword.classList.add("success");
        confirmPassword.classList.remove("error-border");
    }

    checkFormValidity();
});


// 🔥 Final Submit
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Form Submitted Successfully 🚀");
});