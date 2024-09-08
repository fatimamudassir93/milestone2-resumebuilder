// Get the button and the skills section by their IDs
const toggleButton = document.getElementById("toggleSkillsBtn") as HTMLButtonElement;
const skillsSection = document.getElementById("skillsSection") as HTMLElement;

// Add an event listener to the button to toggle the visibility of the skills section
toggleButton.addEventListener("click", () => {
    // Toggle the display property of the skills section
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});