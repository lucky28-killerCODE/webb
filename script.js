function editContent() {
    const activePage = window.location.pathname.split("/").pop();

    if (activePage === "index.html") {
        const name = prompt("Enter your name:", document.getElementById("name").innerText);
        const title = prompt("Enter your job title:", document.getElementById("title").innerText);
        const about = prompt("About Me:", document.getElementById("about").innerText);
        
        if (name) document.getElementById("name").innerText = name;
        if (title) document.getElementById("title").innerText = title;
        if (about) document.getElementById("about").innerText = about;
        
    } else if (activePage === "skills.html") {
        const skills = prompt("Enter your skills (comma-separated):", Array.from(document.getElementById("skills").children).map(li => li.innerText).join(", "));
        if (skills) {
            const skillsArray = skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("");
            document.getElementById("skills").innerHTML = skillsArray;
        }
    } else if (activePage === "experience.html") {
        const experience = prompt("Enter your experience (comma-separated):", Array.from(document.getElementById("experience").children).map(li => li.innerText).join(", "));
        if (experience) {
            const experienceArray = experience.split(",").map(exp => `<li>${exp.trim()}</li>`).join("");
            document.getElementById("experience").innerHTML = experienceArray;
        }
    } else if (activePage === "contact.html") {
        const email = prompt("Enter your email:", document.getElementById("contact-email").innerText);
        const phone = prompt("Enter your phone:", document.getElementById("contact-phone").innerText);
        
        if (email) document.getElementById("contact-email").innerText = email;
        if (phone) document.getElementById("contact-phone").innerText = phone;
    } else if (activePage === "projects.html") {
        const projects = prompt("Enter your projects (comma-separated):", Array.from(document.getElementById("projects").children).map(li => li.innerText).join(", "));
        if (projects) {
            const projectsArray = projects.split(",").map(project => `<li>${project.trim()}</li>`).join("");
            document.getElementById("projects").innerHTML = projectsArray;
        }
    } else if (activePage === "education.html") {
        const education = prompt("Enter your education (comma-separated):", Array.from(document.getElementById("education").children).map(li => li.innerText).join(", "));
        if (education) {
            const educationArray = education.split(",").map(edu => `<li>${edu.trim()}</li>`).join("");
            document.getElementById("education").innerHTML = educationArray;
        }
    } else if (activePage === "portfolio.html") {
        const portfolioItems = prompt("Enter your portfolio items (comma-separated):", Array.from(document.getElementById("portfolio").children).map(li => li.innerText).join(", "));
        if (portfolioItems) {
            const portfolioArray = portfolioItems.split(",").map(item => `<li>${item.trim()}</li>`).join("");
            document.getElementById("portfolio").innerHTML = portfolioArray;
        }
    }
}

function deleteContent(section) {
    if (confirm(`Are you sure you want to delete all content from the ${section} section?`)) {
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
}

function addContent(section) {
    let newContent;
    switch (section) {
        case 'about':
            newContent = prompt("Enter new About Me text:");
            if (newContent) document.getElementById("about").innerText = newContent;
            break;
        case 'portfolio':
            newContent = prompt("Enter new work item:");
            if (newContent) {
                const li = document.createElement("li");
                li.textContent = newContent;
                document.getElementById("portfolio").appendChild(li);
            }
            break;
        case 'projects':
            newContent = prompt("Enter new project:");
            if (newContent) {
                const li = document.createElement("li");
                li.textContent = newContent;
                document.getElementById("projects").appendChild(li);
            }
            break;
        case 'education':
            newContent = prompt("Enter new education:");
            if (newContent) {
                const li = document.createElement("li");
                li.textContent = newContent;
                document.getElementById("education").appendChild(li);
            }
            break;
        case 'skills':
            newContent = prompt("Enter new skill:");
            if (newContent) {
                const li = document.createElement("li");
                li.textContent = newContent;
                document.getElementById("skills").appendChild(li);
            }
            break;
        case 'experience':
            newContent = prompt("Enter new experience:");
            if (newContent) {
                const li = document.createElement("li");
                li.textContent = newContent;
                document.getElementById("experience").appendChild(li);
            }
            break;
        case 'contact':
            alert("Contact information cannot be inserted via this button.");
            break;
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
s
