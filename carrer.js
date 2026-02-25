function sendMessage() {
    const input = document.getElementById("userInput").value;
    if (!input) return;

    addMessage(input, "user");
    generateResponse(input.toLowerCase());

    document.getElementById("userInput").value = "";
}

function quickAsk(question) {
    addMessage(question, "user");
    generateResponse(question.toLowerCase());
}

function addMessage(text, type) {
    const chatBox = document.getElementById("chatBox");
    const msg = document.createElement("div");
    msg.className = "message " + type;
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(input) {
    let response = "Please explore skills and certifications related to your interest.";

    if (input.includes("career suits"))
        response = "Based on your profile, explore Software Development, Networking, or Data Analysis.";

    else if (input.includes("skills"))
        response = "Learn Programming, Communication, Problem Solving, and Technical Tools.";

    else if (input.includes("resume"))
        response = "Use clear formatting, add projects, measurable achievements, and keywords.";

    else if (input.includes("certifications"))
        response = "Consider AWS, CCNA, Google IT Support, or Python certifications.";

    else if (input.includes("interview"))
        response = "Practice aptitude, revise fundamentals, and prepare project explanations.";

    else if (input.includes("networking"))
        response = "Start with CCNA, learn routing, switching, and cybersecurity basics.";

    else if (input.includes("software"))
        response = "Learn JavaScript, Python, databases, and build real-world projects.";

    else if (input.includes("skill gap"))
        response = "Compare job requirements with your skills and focus on missing technologies.";

    else if (input.includes("trending"))
        response = "AI, Cloud Computing, Cybersecurity, and Full Stack Development are trending.";

    else if (input.includes("job ready"))
        response = "Build projects, get certified, improve communication, and create a strong resume.";

    else if (input.includes("soft skills"))
        response = "Employers value teamwork, communication, adaptability, and time management.";

    setTimeout(() => addMessage(response, "bot"), 500);
}

function goHome() {
    window.location.href = "index.html";
}