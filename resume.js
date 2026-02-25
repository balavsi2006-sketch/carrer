function generateResume() {
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value.split(",");
    const education = document.getElementById("education").value;
    const projects = document.getElementById("projects").value;

    const resumeHTML = `
        <h1>${name}</h1>
        <div class="title">${title}</div>
        <p>${email} | ${phone}</p>

        <div class="section-title">Professional Summary</div>
        <p>${summary}</p>

        <div class="section-title">Skills</div>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}
        </ul>

        <div class="section-title">Education</div>
        <p>${education}</p>

        <div class="section-title">Projects</div>
        <p>${projects}</p>
    `;

    document.getElementById("resumePreview").innerHTML = resumeHTML;
}