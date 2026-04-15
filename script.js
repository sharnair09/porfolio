// Load data from JSON
fetch('portfolio.json')
    .then(response => response.json())
    .then(data => {
        loadSkills(data.skills);
        loadProjects(data.projects);
    });

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,1)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Load skills
function loadSkills(skills) {
    const container = document.getElementById('skills-list');
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-item';
        div.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%" data-width="${skill.level}"></div>
            </div>
            <span>${skill.level}%</span>
        `;
        container.appendChild(div);
    });
    // Animate progress bars
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
        });
    }, 500);
}

// Load projects
function loadProjects(projects) {
    const container = document.getElementById('projects-list');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        container.appendChild(div);
    });
}

// Contact form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! (Form submission would connect to a backend service.)');
    e.target.reset();
});