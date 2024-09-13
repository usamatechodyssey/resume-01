
// Function to toggle the visibility of the Skills section
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skillsSection');
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
// Function to toggle the visibility of the Experience section
var toggleExperienceBtn = document.getElementById('toggleExperienceBtn');
var experienceSection = document.getElementById('experienceSection');
toggleExperienceBtn.addEventListener('click', function () {
    if (experienceSection.style.display === 'none' || experienceSection.style.display === '') {
        experienceSection.style.display = 'block';
    }
    else {
        experienceSection.style.display = 'none';
    }
});




function generateResume() {
    // Get form values
    document.getElementById("resume-name").textContent = document.getElementById("form-name").value;
    document.getElementById("title").textContent = document.getElementById("form-title").value;
    document.getElementById("resume-email").textContent = document.getElementById("form-email").value;
    document.getElementById("resume-phone").textContent = document.getElementById("form-phone").value;
    document.getElementById("resume-address").textContent = document.getElementById("form-address").value;
    document.getElementById("about").textContent = document.getElementById("form-about").value;

    // Experience
    document.getElementById("experience1-title").textContent = document.getElementById("form-experience1-title").value;
    document.getElementById("experience1-company").textContent = document.getElementById("form-experience1-company").value;
    document.getElementById("experience2-title").textContent = document.getElementById("form-experience2-title").value;
    document.getElementById("experience2-company").textContent = document.getElementById("form-experience2-company").value;

    // Education
    document.getElementById("education1").textContent = document.getElementById("form-education1").value;
    document.getElementById("education2").textContent = document.getElementById("form-education2").value;
    document.getElementById("education3").textContent = document.getElementById("form-education3").value;

    // Skills Summary
    document.getElementById("skill-summary1").textContent = document.getElementById("form-skill-summary1").value;
    document.getElementById("progress1").style.width = document.getElementById("form-skill-summary1-level").value + "%";
    document.getElementById("skill-summary2").textContent = document.getElementById("form-skill-summary2").value;
    document.getElementById("progress2").style.width = document.getElementById("form-skill-summary2-level").value + "%";

    // Skills
    const skills = document.getElementById("form-skills").value.split(',');
    const skillsList = document.getElementById("resume-skills");
    skillsList.innerHTML = ''; // Clear previous skills
    skills.forEach(skill => {
        let li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}