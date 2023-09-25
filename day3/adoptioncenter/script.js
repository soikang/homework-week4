// Function to toggle the visibility of the description box
function displayDesc(element){
    var descriptionBox = element.querySelector('.info-box');
    descriptionBox.style.display = (descriptionBox.style.display === 'block') ? 'none' : 'block';
}

// Function to close the description box
function closeDescription(element) {
    var descriptionBox = element.parentElement;
    descriptionBox.style.display = 'none';
}

// Add click event listeners to all description text elements
var descriptionTexts = document.querySelectorAll('.info-box');
descriptionTexts.forEach(function (description) {
    description.addEventListener('click', function () {
        displayDesc(this);
    });
});