function focusInput(input) {
    input.parentNode.classList.add('focused');
    document.body.style.background = '#87CEEB'; // Change background color
}

function blurInput(input) {
    input.parentNode.classList.remove('focused');
    document.body.style.background = '#f0f0f0'; // Reset background color
}