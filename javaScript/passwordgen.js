
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('copy');

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click' , copyPassword);

function generatePassword() {
    const length = parseInt(lengthInput.value);
    const useUppercase = uppercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let characters = lowercaseLetters;
    if (useUppercase) characters += uppercaseLetters;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordInput.value = password;
 }

 function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value);
    alert('Password copied to clipboard!');
 }