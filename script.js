// Select all elements with the class 'panel' and store them in the 'panels' variable
const panels = document.querySelectorAll('.panel'); // This selects all the panel elements and stores them in a NodeList

// Add an event listener to each panel for a click event
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // When a panel is clicked, first remove the 'active' class from all panels
        removeActiveClasses();
        // Then, add the 'active' class to the clicked panel
        panel.classList.add('active');
    });
});

// Function to remove the 'active' class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active'); // Remove the 'active' class from each panel
    });
}
