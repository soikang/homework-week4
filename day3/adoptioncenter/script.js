 // Function to toggle the visibility of the description box
 function displayDesc(element) {
    var infoBox = element.nextElementSibling; // Find the next sibling, which is the info-box
    if (infoBox) {
        infoBox.style.display = (infoBox.style.display === 'block') ? 'none' : 'block';
    }
}

// Function to close the description box
function closeDescription(element) {
    var infoBox = element.parentElement;
    infoBox.style.display = 'none';
}
// Add click event listeners to all description text elements
var descriptionTexts = document.querySelectorAll('.description');
descriptionTexts.forEach(function (description) {
    description.addEventListener('click', function () {
        displayDesc(this);
    });
});

// Function to reveal selected contact method field when it's selected from the user
const contactMethodSelect = document.getElementById('contact_method');
const emailField = document.querySelector('.email_field');
const phoneField = document.querySelector('.phone_field');

contactMethodSelect.addEventListener('change', function () {
    const selectedValue = contactMethodSelect.value;
    if (selectedValue === 'email') {
        emailField.style.display = 'block';
        emailField.style.paddingLeft = '20px'; // this can be figured out better way with styles.css
        phoneField.style.display = 'none';
    } else if (selectedValue === 'phone') {
        emailField.style.display = 'none';
        phoneField.style.display = 'block';
        phoneField.style.paddingLeft = '20px'; // this can be figured out better way with styles.css
    } else {
        emailField.style.display = 'none';
        phoneField.style.display = 'none';
    }
});

