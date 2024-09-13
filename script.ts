// Get the elements for the Skills and Education sections
const skillsSection = document.getElementById('skills') as HTMLElement;
const educationSection = document.getElementById('education') as HTMLElement;

// Get the toggle buttons
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const toggleEducationButton = document.getElementById('toggle-education') as HTMLButtonElement;

// Get the theme toggle button
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
const body = document.body;

// Toggle Skills Section
toggleSkillsButton.addEventListener('click', () => {
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
});

// Toggle Education Section
toggleEducationButton.addEventListener('click', () => {
    educationSection.style.display = educationSection.style.display === 'none' ? 'block' : 'none';
});

// Toggle Dark/Light Theme
toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
