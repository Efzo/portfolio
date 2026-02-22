// Cloud Architecture Projects — Based on Real Experience
const projects = [
    {
        id: 'data-clinch-ai-saas',
        title: 'Data Clinch — AI SaaS Platform (Co-Founder & CTO)',
        description: 'Co-founded and architecting a multi-tenant AI SaaS customer support platform for the enterprise data analytics market. Defining end-to-end product vision, infrastructure strategy, LLM integration, and go-to-market positioning to drive enterprise client acquisition.',
        image: 'projects/images/tech7.jpg',
        link: '#',
        technologies: ['AI/LLM', 'OpenAI', 'LangChain', 'Multi-Tenant SaaS', 'AWS', 'Product Strategy']
    },
    {
        id: 'enterprise-microservices-platform',
        title: 'Enterprise Microservices Platform & AI Automation',
        description: 'Principal solution architect at Vertex Inc — designed LLM-powered APIs (OpenAI + LangChain) cutting manual review by 85%, delivered 15+ SAP/ERP integrations optimizing $10M+ annual workflows, and reduced deployment time by 87% via Kubernetes-native CI/CD at 99.9% SLA for 500+ enterprise clients.',
        image: 'projects/images/tech2.jpg',
        link: '#',
        technologies: ['Spring Boot 3.x', 'OpenAI', 'LangChain', 'Kubernetes', 'Terraform', 'SAP ERP', 'Datadog']
    },
    {
        id: 'sap-erp-cloud-integration',
        title: 'SAP ERP Multi-Cloud Integration',
        description: 'Designed and delivered multi-cloud integration architecture connecting 15+ SAP ERP implementations to AWS and Azure cloud platforms, optimizing enterprise data workflows worth $10M+ annually for Fortune 500 clients.',
        image: 'projects/images/tech3.jpg',
        link: '#',
        technologies: ['SAP ERP', 'AWS', 'Azure', 'API Gateway', 'Java', 'Spring Boot']
    },
    {
        id: 'azure-microservices-platform',
        title: 'Azure Cloud Microservices Platform',
        description: 'Architected Python and Java microservices on Azure serving 100+ enterprise clients handling 5M+ daily requests at 99.95% availability. Increased throughput by 200% by refactoring monolith into event-driven microservices with Redis caching and intelligent load balancing.',
        image: 'projects/images/tech4.jpg',
        link: '#',
        technologies: ['Azure', 'Python', 'Java', 'Kubernetes AKS', 'Redis', 'GitLab CI']
    },
    {
        id: 'ai-powered-analytics-platform',
        title: 'AI-Powered Analytics & API Platform',
        description: 'Designed AI-powered microservices with FastAPI and ML integrations reducing manual processing by 85%. Built a secure RESTful API platform (JWT, OAuth2, RBAC) handling 1M+ daily requests with sub-second latency and 95% test coverage via pytest.',
        image: 'projects/images/tech5.jpg',
        link: '#',
        technologies: ['Python', 'FastAPI', 'ML/AI', 'PostgreSQL', 'JWT/OAuth2', 'pytest']
    },
    {
        id: 'aws-serverless-reliability',
        title: 'AWS Serverless & Reliability Engineering',
        description: 'Designed serverless architecture patterns on AWS reducing infrastructure costs by 35% and processing time by 50%. Implemented CloudWatch custom metrics and Lambda-based anomaly detection, improving incident detection by 70% and enabling proactive SRE response.',
        image: 'projects/images/tech6.jpg',
        link: '#',
        technologies: ['AWS Lambda', 'Step Functions', 'CloudWatch', 'Python', 'X-Ray', 'SRE']
    },
    {
        id: 'iot-energy-management',
        title: 'IoT Energy Management Platform',
        description: 'Architected an IoT data processing platform handling 50M+ daily sensor readings for enterprise energy management at 99.9% reliability. Reduced post-deployment defects by 50% and system downtime by 70% through zero-downtime CI/CD and comprehensive testing strategy.',
        image: 'projects/images/tech8.jpg',
        link: '#',
        technologies: ['Python', 'PostgreSQL', 'PagerDuty', 'CI/CD', 'Batch Processing', 'IoT']
    }
];

// Project Details Data — Based on Real Experience
const projectDetails = {
    "data-clinch-ai-saas": {
        title: "Data Clinch — AI SaaS Platform",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Co-founded Data Clinch, a multi-tenant AI SaaS customer support platform targeting the enterprise data analytics market. As CTO, I own end-to-end product vision, infrastructure architecture, AI model integration strategy, and go-to-market execution — alongside leading investor communication and fundraising narrative.</p>

            <h4>Key Responsibilities & Achievements</h4>
            <ul>
                <li><strong>Product Vision & Roadmap:</strong> Defined full platform vision, technical roadmap, and feature prioritization aligned to enterprise data analytics market</li>
                <li><strong>AI Model Integration:</strong> Architected LLM integration strategy balancing cost-performance trade-offs for scalability and competitive differentiation</li>
                <li><strong>Go-to-Market:</strong> Established GTM strategy and platform positioning, driving enterprise client acquisition pipeline</li>
                <li><strong>Investor Advisory:</strong> Translated distributed systems architecture into business value propositions to support fundraising and strategic partnerships</li>
            </ul>

            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>AI Layer:</strong> OpenAI API, LangChain orchestration, multi-model strategy</li>
                <li><strong>Platform:</strong> Multi-tenant SaaS architecture on AWS</li>
                <li><strong>Infrastructure:</strong> Kubernetes, Terraform, event-driven microservices</li>
                <li><strong>Product:</strong> End-to-end product ownership — discovery, roadmap, UX, delivery</li>
            </ul>
        `,
        technologies: ["AI/LLM", "OpenAI", "LangChain", "Multi-Tenant SaaS", "AWS", "Kubernetes", "Terraform", "Product Strategy"],
        duration: "Dec 2025 – Present",
        teamSize: "Co-founding team",
        role: "Co-Founder & CTO — Data Clinch",
        results: {
            platformType: "Multi-tenant AI SaaS",
            market: "Enterprise data analytics",
            aiIntegration: "LLM-powered customer support",
            status: "Active — In market"
        }
    },
    "enterprise-microservices-platform": {
        title: "Enterprise Microservices Platform & AI Automation — Vertex Inc",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Serving as principal solution architect at Vertex Inc, owning enterprise microservices architecture, AI product strategy, and SAP/ERP integration for 500+ enterprise clients processing 1M+ daily transactions at 99.9% SLA.</p>

            <h4>Key Achievements</h4>
            <ul>
                <li><strong>85% Manual Review Reduction:</strong> Designed LLM-powered APIs using OpenAI and LangChain to automate compliance and reporting workflows</li>
                <li><strong>87% Deployment Time Reduction:</strong> Kubernetes-native CI/CD — from 2 hours to 15 minutes across 50+ microservices</li>
                <li><strong>99.9% SLA Uptime:</strong> Sustained across 500+ enterprise clients</li>
                <li><strong>45% Fewer P1 Incidents:</strong> End-to-end observability with Datadog and automated alerting</li>
                <li><strong>$10M+ Annual Workflows:</strong> Optimized through 15+ SAP/ERP ecosystem integrations</li>
                <li><strong>2.3-Hour MTTR:</strong> For critical production issues</li>
            </ul>

            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>AI Layer:</strong> OpenAI API, LangChain orchestration for workflow automation</li>
                <li><strong>Backend:</strong> Spring Boot 3.x microservices (50+ services)</li>
                <li><strong>Orchestration:</strong> Kubernetes with native CI/CD pipelines</li>
                <li><strong>Infrastructure:</strong> Terraform IaC, Jenkins pipelines</li>
                <li><strong>Database:</strong> PostgreSQL with performance optimization</li>
                <li><strong>Observability:</strong> Datadog dashboards, automated alerting, distributed tracing</li>
                <li><strong>ERP Integration:</strong> 15+ SAP/ERP systems connected to cloud platforms</li>
            </ul>
        `,
        technologies: ["Spring Boot 3.x", "Kubernetes", "OpenAI", "LangChain", "Terraform", "PostgreSQL", "Datadog", "SAP ERP"],
        duration: "Ongoing (Jun 2024–Present)",
        teamSize: "Cross-functional enterprise teams",
        role: "Solution Architect & AI Product Owner — Vertex Inc",
        results: {
            deploymentSpeedup: "87% faster (2h → 15min)",
            slaUptime: "99.9% across 500+ clients",
            transactionsDaily: "1M+ daily",
            p1IncidentReduction: "45% fewer P1 incidents"
        }
    },
    "sap-erp-cloud-integration": {
        title: "SAP ERP Multi-Cloud Integration",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Designed and delivered a multi-cloud integration architecture connecting 15+ SAP ERP implementations to AWS and Azure cloud platforms at Vertex Inc. Optimized enterprise data workflows worth $10M+ annually for Fortune 500 companies, with direct C-level stakeholder engagement to align technology investment with business growth.</p>

            <h4>Key Achievements</h4>
            <ul>
                <li><strong>15+ SAP ERP Integrations:</strong> Successfully architected and delivered end-to-end</li>
                <li><strong>$10M+ Annual Workflows:</strong> Enterprise data pipelines optimized</li>
                <li><strong>Fortune 500 Clients:</strong> Direct C-level engagement and architecture roadmaps</li>
                <li><strong>Zero-Downtime Integrations:</strong> All SAP connections delivered without service interruption</li>
            </ul>

            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Integration Layer:</strong> API Gateway strategy across AWS and Azure</li>
                <li><strong>ERP Systems:</strong> SAP ERP, Oracle ERP integration patterns</li>
                <li><strong>Backend:</strong> Java / Spring Boot integration services</li>
                <li><strong>Cloud:</strong> AWS (API Gateway, Lambda, S3) + Azure (App Service, Functions)</li>
                <li><strong>Data Pipelines:</strong> ETL workflows optimizing $10M+ in annual data flows</li>
                <li><strong>Security:</strong> Enterprise authentication, encryption, compliance controls</li>
            </ul>
        `,
        technologies: ["SAP ERP", "AWS", "Azure", "API Gateway", "Java", "Spring Boot", "ETL Pipelines", "OAuth2"],
        duration: "Ongoing (Jun 2024–Present)",
        teamSize: "Cross-functional enterprise teams",
        role: "Principal Solution Architect — Vertex Inc",
        results: {
            erpIntegrations: "15+ SAP implementations",
            annualWorkflowValue: "$10M+ optimized",
            enterpriseClients: "500+ Fortune 500 clients",
            dataflowReliability: "99.9% uptime"
        }
    },
    "azure-microservices-platform": {
        title: "Azure Cloud Microservices Platform",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Architected Python and Java microservices on Azure for a Microsoft client engagement at LTIMindtree, serving 100+ enterprise clients handling 5M+ daily requests with 99.95% system availability on Kubernetes. Delivered 8 major product releases increasing customer retention by 25%.</p>

            <h4>Key Achievements</h4>
            <ul>
                <li><strong>200% Throughput Increase:</strong> Refactored monolith into event-driven microservices</li>
                <li><strong>99.95% Availability:</strong> Sustained across 5M+ daily requests on AKS</li>
                <li><strong>40% Performance Improvement:</strong> Redis caching, SQLAlchemy optimization, load balancing</li>
                <li><strong>50% Reduction in Unplanned Downtime:</strong> Automated Python pipelines with GitLab CI</li>
                <li><strong>25% Customer Retention Increase:</strong> Through 8 major releases and scalable architecture</li>
                <li><strong>35% Reduction in Customer Escalations:</strong> Through mentorship and operational improvements</li>
            </ul>

            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Backend:</strong> Python (FastAPI, Django) + Java microservices</li>
                <li><strong>Cloud Platform:</strong> Azure — AKS, App Service, Azure Functions</li>
                <li><strong>Caching:</strong> Redis multi-layer caching strategy</li>
                <li><strong>CI/CD:</strong> GitLab CI with security scanning and compliance validation</li>
                <li><strong>Observability:</strong> Prometheus, CloudWatch integration</li>
                <li><strong>Team:</strong> Led cross-functional team of 10 engineers across 3 time zones</li>
            </ul>
        `,
        technologies: ["Azure AKS", "Python", "Java", "Redis", "GitLab CI", "Prometheus", "SQLAlchemy", "Kubernetes"],
        duration: "Sep 2022 – Jun 2024",
        teamSize: "10 engineers (3 time zones)",
        role: "Solution Architect & Technical Product Specialist — LTIMindtree",
        results: {
            throughputIncrease: "200%",
            systemAvailability: "99.95%",
            performanceImprovement: "40%",
            customerRetention: "+25%"
        }
    },
    "ai-powered-analytics-platform": {
        title: "AI-Powered Analytics & API Platform",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Designed an AI-powered microservices architecture with FastAPI and ML integrations at Mind Machine, reducing manual processing by 85% and delivering real-time analytics for 50+ enterprise clients. Built a secure, scalable RESTful API platform handling 1M+ daily requests with sub-second latency.</p>

            <h4>Key Achievements</h4>
            <ul>
                <li><strong>85% Reduction in Manual Processing:</strong> Through AI/ML microservices automation</li>
                <li><strong>1M+ Daily Requests:</strong> Sub-second latency with comprehensive security (JWT, OAuth2, RBAC)</li>
                <li><strong>99.2% Uptime:</strong> Improved from 95% through systematic architecture and monitoring</li>
                <li><strong>95% Test Coverage:</strong> Pytest suites with mocking, fixtures, and CI automation</li>
                <li><strong>40% Reduction in Production Bugs:</strong> Through rigorous code quality standards</li>
            </ul>

            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Backend:</strong> Python FastAPI with ML model integrations</li>
                <li><strong>Security:</strong> JWT, OAuth2, RBAC, rate limiting</li>
                <li><strong>Database:</strong> PostgreSQL with performance-driven design</li>
                <li><strong>API Documentation:</strong> Comprehensive OpenAPI/Swagger docs</li>
                <li><strong>Testing:</strong> pytest suites with 95% coverage, CI automation</li>
                <li><strong>Monitoring:</strong> Custom analytics dashboards for real-time insights</li>
            </ul>
        `,
        technologies: ["Python", "FastAPI", "ML/AI", "PostgreSQL", "JWT", "OAuth2", "RBAC", "pytest"],
        duration: "Oct 2020 – Oct 2021",
        teamSize: "Full-stack architecture team",
        role: "Full Stack Architect & Product Owner — Mind Machine",
        results: {
            manualProcessingReduction: "85%",
            dailyRequests: "1M+ with sub-second latency",
            uptimeImprovement: "95% → 99.2%",
            testCoverage: "95%"
        }
    },
    "aws-serverless-reliability": {
        title: "AWS Serverless & Reliability Engineering",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Contributed to high-availability distributed systems architecture at Amazon, processing millions of daily transactions using Python Lambda, Step Functions, and AWS-native services. Designed serverless patterns reducing infrastructure costs by 35% and implemented CloudWatch anomaly detection improving incident response by 70%.</p>

            <h4>Key Achievements</h4>
            <ul>
                <li><strong>35% Infrastructure Cost Reduction:</strong> Through intelligent serverless architecture</li>
                <li><strong>50% Faster Processing Time:</strong> Through Step Functions orchestration</li>
                <li><strong>70% Faster Incident Detection:</strong> CloudWatch custom metrics and Lambda-based anomaly detection</li>
                <li><strong>SLO Framework:</strong> Established service level objectives for mission-critical applications</li>
                <li><strong>Proactive SRE Response:</strong> Python-based reliability tooling for production systems</li>
            </ul>

            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Compute:</strong> AWS Lambda (Python) for serverless processing</li>
                <li><strong>Orchestration:</strong> AWS Step Functions for workflow management</li>
                <li><strong>Observability:</strong> CloudWatch custom metrics, X-Ray distributed tracing</li>
                <li><strong>Reliability:</strong> SLO/SLI design, automated anomaly detection</li>
                <li><strong>Scale:</strong> Millions of daily transactions, mission-critical availability</li>
                <li><strong>SRE Tooling:</strong> Python-based reliability tooling and runbook automation</li>
            </ul>
        `,
        technologies: ["AWS Lambda", "Step Functions", "CloudWatch", "Python", "X-Ray", "SRE", "SLOs/SLIs"],
        duration: "May 2022 – Sep 2022",
        teamSize: "SRE & distributed systems teams",
        role: "Software Engineer & Cloud Architect — Amazon",
        results: {
            costReduction: "35%",
            processingSpeedup: "50% faster",
            incidentDetection: "70% faster",
            systemScale: "Millions of daily transactions"
        }
    },
    "iot-energy-management": {
        title: "IoT Energy Management Platform",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Architected an IoT data processing platform with Python backend services at Smarter Grid International, handling 50M+ daily sensor readings for enterprise energy management at 99.9% reliability. Built scalable PostgreSQL-backed data pipelines and a Python-based alerting framework integrated with PagerDuty for 24/7 incident response.</p>

            <h4>Key Achievements</h4>
            <ul>
                <li><strong>50M+ Daily Sensor Readings:</strong> Processed at enterprise scale with 99.9% reliability</li>
                <li><strong>70% Reduction in System Downtime:</strong> Through zero-downtime CI/CD and testing strategy</li>
                <li><strong>50% Reduction in Post-Deployment Defects:</strong> Through comprehensive testing and CI/CD design</li>
                <li><strong>24/7 Incident Response:</strong> PagerDuty integration with automated runbook execution</li>
                <li><strong>Enterprise-Scale Throughput:</strong> PostgreSQL batch processing designed from the ground up</li>
            </ul>

            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Backend:</strong> Python services for IoT data ingestion and processing</li>
                <li><strong>Database:</strong> PostgreSQL-backed data pipelines with batch processing</li>
                <li><strong>Alerting:</strong> Python-based alerting framework integrated with PagerDuty</li>
                <li><strong>CI/CD:</strong> Zero-downtime deployment pipeline with comprehensive test strategy</li>
                <li><strong>Scale:</strong> 50M+ daily sensor readings, enterprise energy management</li>
                <li><strong>Reliability:</strong> 99.9% uptime, automated runbooks, incident response automation</li>
            </ul>
        `,
        technologies: ["Python", "PostgreSQL", "PagerDuty", "CI/CD", "Batch Processing", "IoT", "Alerting"],
        duration: "Oct 2018 – Oct 2020",
        teamSize: "Engineering reliability team",
        role: "Software Engineer & Site Reliability Engineer — Smarter Grid International",
        results: {
            dailySensorReadings: "50M+",
            systemReliability: "99.9% uptime",
            downtimeReduction: "70%",
            defectReduction: "50% post-deployment defects"
        }
    }
};

// Project Modal Functions - Global scope for onclick handlers
function openProjectModal(projectId) {
    const project = projectDetails[projectId];
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    const modal = document.getElementById('projectModal');
    if (!modal) {
        createProjectModal();
    }
    
    // Populate modal content
    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalBody').innerHTML = project.fullDescription;
    document.getElementById('projectModalTechnologies').innerHTML = project.technologies.map(tech => 
        `<span class="badge bg-primary me-1 mb-1">${tech}</span>`
    ).join('');
    
    // Populate project details
    document.getElementById('projectDuration').textContent = project.duration;
    document.getElementById('projectTeamSize').textContent = project.teamSize;
    document.getElementById('projectRole').textContent = project.role;
    
    // Show results
    const resultsContainer = document.getElementById('projectResults');
    resultsContainer.innerHTML = '';
    Object.entries(project.results).forEach(([key, value]) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'col-md-6 mb-2';
        resultItem.innerHTML = `<strong>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> ${value}`;
        resultsContainer.appendChild(resultItem);
    });
    
    // Show modal
    const modalElement = new bootstrap.Modal(document.getElementById('projectModal'));
    modalElement.show();
}

// Global function for creating project modal
function createProjectModal() {
    const modalHTML = `
        <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" style="background: var(--card-bg); color: var(--text-light); border: 1px solid rgba(0, 212, 255, 0.2);">
                    <div class="modal-header" style="border-bottom: 1px solid rgba(0, 212, 255, 0.2);">
                        <h5 class="modal-title" id="projectModalTitle" style="color: var(--primary-color); font-weight: 700;"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="filter: invert(1);"></button>
                    </div>
                    <div class="modal-body">
                        <div id="projectModalBody"></div>
                        
                        <div class="row mt-4">
                            <div class="col-md-4">
                                <h6 style="color: var(--primary-color);">Duration</h6>
                                <p id="projectDuration"></p>
                            </div>
                            <div class="col-md-4">
                                <h6 style="color: var(--primary-color);">Team Size</h6>
                                <p id="projectTeamSize"></p>
                            </div>
                            <div class="col-md-4">
                                <h6 style="color: var(--primary-color);">Role</h6>
                                <p id="projectRole"></p>
                            </div>
                        </div>
                        
                        <div class="mt-4">
                            <h6 style="color: var(--primary-color);">Technologies Used</h6>
                            <div id="projectModalTechnologies"></div>
                        </div>
                        
                        <div class="mt-4">
                            <h6 style="color: var(--primary-color);">Key Results</h6>
                            <div class="row" id="projectResults"></div>
                        </div>
                    </div>
                    <div class="modal-footer" style="border-top: 1px solid rgba(0, 212, 255, 0.2);">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="https://www.linkedin.com/in/efosa-o-4882a015a/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <i class="fab fa-linkedin me-2"></i>Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// ============================================================
// THEME MANAGEMENT — Dark / Light / System
// ============================================================
const THEMES = ['dark', 'light', 'system'];
const THEME_META = {
    dark:   { icon: 'fa-moon',    label: 'Dark' },
    light:  { icon: 'fa-sun',     label: 'Light' },
    system: { icon: 'fa-desktop', label: 'System' }
};

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(preference) {
    const meta = THEME_META[preference] || THEME_META['dark'];
    const effective = preference === 'system' ? getSystemTheme() : preference;
    document.documentElement.setAttribute('data-theme', effective);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
        const iconEl = btn.querySelector('i');
        if (iconEl) iconEl.className = `fas ${meta.icon}`;
        const labelEl = btn.querySelector('.theme-label');
        if (labelEl) labelEl.textContent = meta.label;
        btn.title = `Theme: ${meta.label} — click to cycle`;
    }
    try { localStorage.setItem('portfolio-theme', preference); } catch(e) {}
}

// Cycle to next theme on click
function cycleTheme() {
    const current = localStorage.getItem('portfolio-theme') || 'dark';
    const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
    applyTheme(next);
}

// Re-apply when system preference changes (only matters when mode = 'system')
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if ((localStorage.getItem('portfolio-theme') || 'dark') === 'system') applyTheme('system');
});

document.addEventListener('DOMContentLoaded', function() {
    // Attach theme click listener first — before anything that could throw
    document.getElementById('theme-toggle')?.addEventListener('click', cycleTheme);
    // Apply saved theme (updates icon + label to match)
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(savedTheme);
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-category, .project-card, #about p').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Create project cards
    const projectList = document.getElementById('project-list');
    if (projectList) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'col-lg-4 col-md-6 mb-4';
            
            // Create technology badges
            const techBadges = project.technologies.map(tech => 
                `<span class="badge bg-primary me-1 mb-1">${tech}</span>`
            ).join('');
            
            projectCard.innerHTML = `
                <div class="card project-card h-100" data-project-id="${project.id}">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}" onerror="this.src='projects/images/tech9.jpg'">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text flex-grow-1">${project.description}</p>
                        <div class="mb-3">
                            ${techBadges}
                        </div>
                        <button class="btn btn-primary mt-auto" onclick="openProjectModal('${project.id}')">
                            <i class="fas fa-info-circle me-2"></i>View Details
                        </button>
                    </div>
                </div>
            `;
            projectList.appendChild(projectCard);
        });
    }

    // Set current year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Contact form — Formspree (replace YOUR_FORMSPREE_ID with your ID from formspree.io)
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgeaaod';

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submit-btn');
            const successDiv = document.getElementById('form-success');
            const errorDiv = document.getElementById('form-error');

            // Reset state
            errorDiv.style.display = 'none';
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';

            try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: new FormData(contactForm)
                });

                const data = await response.json();

                if (response.ok) {
                    contactForm.style.display = 'none';
                    successDiv.style.display = 'block';
                } else {
                    const msg = (data && data.errors)
                        ? data.errors.map(e => e.message).join(', ')
                        : 'Submission failed. Please email ojomoefosa@gmail.com directly.';
                    throw new Error(msg);
                }
            } catch (err) {
                errorDiv.style.display = 'block';
                errorDiv.textContent = err.message || 'Something went wrong. Please email ojomoefosa@gmail.com directly.';
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
            }
        });
    }
});