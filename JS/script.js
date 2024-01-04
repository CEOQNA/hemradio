// scripts.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get all the headings of the articles
    var headings = document.querySelectorAll('h3');

    // Loop through each heading
    for(var i = 0; i < headings.length; i++) {
        // Add a click event listener to each heading
        headings[i].addEventListener('click', function(e) {
            // Get the next sibling element (the description)
            var description = e.target.nextElementSibling;

            // Toggle the 'hidden' class on the description
            description.classList.toggle('hidden');
        });
    }
});
