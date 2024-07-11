document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project list
const projects = [
    { 
        title: 'ViewMate', 
        description: 'Movie Gallary for latest and trending Movies', 
        image: 'project1.jpg',
        link: 'https://ornate-shortbread-44363b.netlify.app/'
    },
    { 
        title: 'Plan Buddy', 
        description: 'A planing platform to keep your event organised', 
        image: 'project2.jpg',
        link: 'https://planbuddy.netlify.app/'
    },
    { 
        title: 'Quote Generator', 
        description: 'A quote generaor for daily inspiration', 
        image: 'project3.jpg',
        link: 'https://quotty.netlify.app'
    }
];

const projectList = document.getElementById('project-list');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'col-md-4 mb-4';
    projectCard.innerHTML = `
        <div class="card project-card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
            </div>
        </div>
    `;
    projectList.appendChild(projectCard);
});


 
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
       
        console.log('Form submitted');
        
    });
});





//Date on Footer Update
document.getElementById('current-year').textContent = new Date().getFullYear();


});