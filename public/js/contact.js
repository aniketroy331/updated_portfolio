document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('successPopup').style.display = 'block';
            form.reset(); 
        } else {
            document.getElementById('faliurePopup').style.display = 'block';
            form.reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('faliurePopup').style.display = 'block';
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Send';
    });
});

function closePopupsuccess() {
    document.getElementById('successPopup').style.display = 'none';
}
function closePopupfaliure() {
    document.getElementById('faliurePopup').style.display = 'none';
}