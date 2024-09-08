// Get the button and the skills section by their IDs
var toggleButton = document.getElementById("toggleSkillsBtn");
var skillsSection = document.getElementById("skillsSection");
// Add an event listener to the button to toggle the visibility of the skills section
toggleButton.addEventListener("click", function () {
    // Toggle the display property of the skills section
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
