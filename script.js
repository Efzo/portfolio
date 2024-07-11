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
        { title: 'Project 1', description: 'A brief description of Project 1', image: 'project1.jpg' },
        { title: 'Project 2', description: 'A brief description of Project 2', image: 'project2.jpg' },
        { title: 'Project 3', description: 'A brief description of Project 3', image: 'project3.jpg' }
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
                    <a href="#" class="btn btn-primary">Learn More</a>
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


// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contact-form');
//     const submitButton = contactForm.querySelector('button[type="submit"]');

//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Show loading state
//         submitButton.innerHTML = 'Sending...';
//         submitButton.disabled = true;

//         // Collect form data
//         const formData = new FormData(contactForm);

//         // Send form data using fetch
//         fetch('https://formsubmit.co/d34172d6407b803862845b8a0d97abc6', {
//             method: 'POST',
//             body: formData,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             alert('Thank you for your message! I will get back to you soon.');
//             contactForm.reset();
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Oops! There was a problem sending your message. Please try again.');
//         })
//         .finally(() => {
//             // Reset button state
//             submitButton.innerHTML = 'Send Message';
//             submitButton.disabled = false;
//         });
//     });
// });




//Date on Footer Update
document.getElementById('current-year').textContent = new Date().getFullYear();


});