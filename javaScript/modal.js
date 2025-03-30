
// Get the modal
var modal = document.getElementById("password-modal");

// Get the button that opens the modal
var passwordInput = document.getElementById("password-input");

// Get the close button
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openPasswordModal() {
    modal.style.display = "block";
}

// Function to save the password
function savePassword() {
    var password = document.getElementById("password").value;
    passwordInput.value = password;
    modal.style.display = "none";
}

// Close the modal when user clicks close button
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when user clicks outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}