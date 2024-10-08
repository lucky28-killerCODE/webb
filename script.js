function editContent() {
    const activePage = window.location.pathname.split("/").pop();

    if (activePage === "index.html") {
        const name = prompt("Enter your name:", document.getElementById("name").innerText);
        const title = prompt("Enter your job title:", document.getElementById("title").innerText);
        const about = prompt("About Me:", document.getElementById("about").innerText);
        
        document.getElementById("name").innerText = name || document.getElementById("name").innerText;
        document.getElementById("title").innerText = title || document.getElementById("title").innerText;
        document.getElementById("about").innerText = about || document.getElementById("about").innerText;
    } else if (activePage === "skills.html") {
        const skills = prompt("Enter your skills (comma-separated):", Array.from(document.getElementById("skills").children).map(li => li.innerText).join(", "));
        const skillsArray = skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("");
        document.getElementById("skills").innerHTML = skillsArray;
    } else if (activePage === "experience.html") {
        const experience = prompt("Enter your experience (comma-separated):", Array.from(document.getElementById("experience").children).map(li => li.innerText).join(", "));
        const experienceArray = experience.split(",").map(exp => `<li>${exp.trim()}</li>`).join("");
        document.getElementById("experience").innerHTML = experienceArray;
    } else if (activePage === "contact.html") {
        const email = prompt("Enter your email:", document.getElementById("contact-email").innerText);
        const phone = prompt("Enter your phone:", document.getElementById("contact-phone").innerText);
        
        document.getElementById("contact-email").innerText = email || document.getElementById("contact-email").innerText;
        document.getElementById("contact-phone").innerText = phone || document.getElementById("contact-phone").innerText;
    } else if (activePage === "projects.html") {
        const projects = prompt("Enter your projects (comma-separated):", Array.from(document.getElementById("projects").children).map(li => li.innerText).join(", "));
        const projectsArray = projects.split(",").map(project => `<li>${project.trim()}</li>`).join("");
        document.getElementById("projects").innerHTML = projectsArray;
    } else if (activePage === "education.html") {
        const education = prompt("Enter your education (comma-separated):", Array.from(document.getElementById("education").children).map(li => li.innerText).join(", "));
        const educationArray = education.split(",").map(edu => `<li>${edu.trim()}</li>`).join("");
        document.getElementById("education").innerHTML = educationArray;
    } else if (activePage === "portfolio.html") {
        const portfolioItems = prompt("Enter your portfolio items (comma-separated):", Array.from(document.getElementById("portfolio").children).map(li => li.innerText).join(", "));
        const portfolioArray = portfolioItems.split(",").map(item => `<li>${item.trim()}</li>`).join("");
        document.getElementById("portfolio").innerHTML = portfolioArray;
    }
}

function deleteContent(section) {
    if (section === 'portfolio') {
        document.getElementById("portfolio").innerHTML = '';
    } else if (section === 'projects') {
        document.getElementById("projects").innerHTML = '';
    } else if (section === 'education') {
        document.getElementById("education").innerHTML = '';
    } else if (section === 'skills') {
        document.getElementById("skills").innerHTML = '';
    } else if (section === 'experience') {
        document.getElementById("experience").innerHTML = '';
    } else if (section === 'contact') {
        document.getElementById("contact-email").innerText = '';
        document.getElementById("contact-phone").innerText = '';
    }
}

function addContent(section) {
    if (section === 'about') {
        const newAbout = prompt("Enter new About Me text:");
        if (newAbout) {
            document.getElementById("about").innerText = newAbout;
        }
    } else if (section === 'portfolio') {
        const newPortfolioItem = prompt("Enter new work item:");
        if (newPortfolioItem) {
            const li = document.createElement("li");
            li.textContent = newPortfolioItem; // Use textContent for safety
            document.getElementById("portfolio").appendChild(li);
        }
    } else if (section === 'projects') {
        const newProject = prompt("Enter new project:");
        if (newProject) {
            const li = document.createElement("li");
            li.textContent = newProject; // Use textContent for safety
            document.getElementById("projects").appendChild(li);
        }
    } else if (section === 'education') {
        const newEducation = prompt("Enter new education:");
        if (newEducation) {
            const li = document.createElement("li");
            li.textContent = newEducation; // Use textContent for safety
            document.getElementById("education").appendChild(li);
        }
    } else if (section === 'skills') {
        const newSkill = prompt("Enter new skill:");
        if (newSkill) {
            const li = document.createElement("li");
            li.textContent = newSkill; // Use textContent for safety
            document.getElementById("skills").appendChild(li);
        }
    } else if (section === 'experience') {
        const newExperience = prompt("Enter new experience:");
        if (newExperience) {
            const li = document.createElement("li");
            li.textContent = newExperience; // Use textContent for safety
            document.getElementById("experience").appendChild(li);
        }
    } else if (section === 'contact') {
        alert("Contact information cannot be inserted via this button.");
    }
}

window.onload = function() {
    const bubbleContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 8; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubbleContainer.appendChild(bubble);
    }

    // Highlight the active page in the navbar
    const activePage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active'); // Add 'active' class to the current link
        }
    });
};
