document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const interpersonalSkills = document.getElementById('interpersonalSkills').value;
    const template = document.getElementById('template').value;

    // Generate resume output
    let resumeOutput = `<h2>${username}'s Resume</h2>`;
    resumeOutput += `<p><strong>Email:</strong> ${email}</p>`;
    resumeOutput += `<p><strong>Skills:</strong> ${skills.join(', ')}</p>`;
    resumeOutput += `<p><strong>Interpersonal Skills:</strong> ${interpersonalSkills}</p>`;
    resumeOutput += `<p><strong>Selected Template:</strong> ${template}</p>`;

    // Display the generated resume with the selected template
    const outputDiv = document.getElementById('resumeOutput');
    outputDiv.className = template; // Apply the selected template class
    outputDiv.innerHTML = resumeOutput;
    outputDiv.style.display = 'block'; // Show the resume output
});