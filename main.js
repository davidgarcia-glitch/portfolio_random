import "./sass/styles.scss";

const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");

emailInput.addEventListener("input", function() {
    if (emailInput.validity.valid) {
        emailInput.style.borderBottom = "2px solid #4EE1A0";  
        errorMsg.style.display = "none"; 
    } else {
        emailInput.style.borderBottom = "2px solid red"; 
        errorMsg.style.display = "block";  
    }
});