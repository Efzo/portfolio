// Cloud Architecture Projects
const projects = [
    { 
        id: 'multi-cloud-ecommerce',
        title: 'Multi-Cloud E-commerce Platform', 
        description: 'Designed and implemented a scalable e-commerce solution using AWS, Azure, and GCP with microservices architecture, containerization, and CI/CD pipelines. Achieved 99.9% uptime and 40% cost reduction.', 
        image: 'projects/images/tech2.jpg',
        link: '#',
        technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
    },
    { 
        id: 'serverless-analytics',
        title: 'Serverless Data Analytics Pipeline', 
        description: 'Built a real-time data processing pipeline using AWS Lambda, Kinesis, and Redshift. Handles 1M+ events daily with automated scaling and cost optimization strategies.', 
        image: 'projects/images/tech3.jpg',
        link: '#',
        technologies: ['AWS Lambda', 'Kinesis', 'Redshift', 'Python', 'CloudFormation']
    },
    { 
        id: 'hybrid-migration',
        title: 'Hybrid Cloud Migration Strategy', 
        description: 'Led migration of legacy on-premises systems to cloud-native architecture. Implemented zero-downtime migration with disaster recovery and security best practices.', 
        image: 'projects/images/tech4.jpg',
        link: '#',
        technologies: ['Azure', 'VMware', 'Terraform', 'Ansible', 'Azure DevOps']
    },
    { 
        id: 'microservices-platform',
        title: 'Cloud-Native Microservices Platform', 
        description: 'Architected a containerized microservices platform using Kubernetes on AWS EKS. Implemented service mesh, API gateway, and comprehensive monitoring solutions.', 
        image: 'projects/images/tech5.jpg',
        link: '#',
        technologies: ['Kubernetes', 'Istio', 'AWS EKS', 'Prometheus', 'Grafana']
    },
    { 
        id: 'ai-ml-infrastructure',
        title: 'AI/ML Cloud Infrastructure', 
        description: 'Designed ML infrastructure on Azure ML and AWS SageMaker for model training and deployment. Implemented MLOps pipelines with automated model versioning and A/B testing.', 
        image: 'projects/images/tech6.jpg',
        link: '#',
        technologies: ['Azure ML', 'AWS SageMaker', 'MLflow', 'Kubeflow', 'Docker']
    },
    { 
        id: 'disaster-recovery',
        title: 'Disaster Recovery & Backup Solution', 
        description: 'Implemented comprehensive DR strategy across multiple regions with automated failover, data replication, and compliance with SOC2 and GDPR requirements.', 
        image: 'projects/images/tech8.jpg',
        link: '#',
        technologies: ['AWS', 'Azure', 'Veeam', 'Terraform', 'CloudWatch']
    }
];

// Project Details Data
const projectDetails = {
    "multi-cloud-ecommerce": {
        title: "Multi-Cloud E-commerce Platform",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Led the design and implementation of a comprehensive multi-cloud e-commerce platform that serves over 100,000 daily active users. The platform was built using a microservices architecture deployed across AWS, Azure, and Google Cloud Platform to ensure high availability and optimal performance.</p>
            
            <h4>Key Achievements</h4>
            <ul>
                <li><strong>99.9% Uptime:</strong> Achieved through multi-cloud redundancy and failover mechanisms</li>
                <li><strong>40% Cost Reduction:</strong> Optimized cloud resource allocation and implemented auto-scaling</li>
                <li><strong>50% Faster Load Times:</strong> Implemented CDN and caching strategies</li>
                <li><strong>Zero Downtime Deployments:</strong> Blue-green deployment with automated rollback</li>
            </ul>
            
            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Frontend:</strong> React.js with Next.js for SSR, deployed on Vercel</li>
                <li><strong>Backend:</strong> Node.js microservices with Express.js</li>
                <li><strong>Database:</strong> MongoDB Atlas (primary), Redis for caching</li>
                <li><strong>Cloud Services:</strong> AWS EC2, Azure App Service, GCP Cloud Run</li>
                <li><strong>Containerization:</strong> Docker containers orchestrated with Kubernetes</li>
                <li><strong>CI/CD:</strong> GitHub Actions with automated testing and deployment</li>
                <li><strong>Monitoring:</strong> Datadog, New Relic, and custom dashboards</li>
            </ul>
        `,
        technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "React", "Node.js", "MongoDB", "Redis"],
        duration: "8 months",
        teamSize: "12 developers",
        role: "Lead Cloud Solution Architect",
        results: {
            uptime: "99.9%",
            costReduction: "40%",
            performanceImprovement: "50%",
            userSatisfaction: "95%"
        }
    },
    "serverless-analytics": {
        title: "Serverless Data Analytics Pipeline",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Architected and implemented a real-time data analytics pipeline processing over 1 million events daily. The solution leverages AWS serverless technologies to provide cost-effective, scalable data processing with automated scaling and monitoring.</p>
            
            <h4>Key Achievements</h4>
            <ul>
                <li><strong>1M+ Events Daily:</strong> Processed with sub-second latency</li>
                <li><strong>60% Cost Savings:</strong> Serverless architecture vs traditional infrastructure</li>
                <li><strong>Real-time Processing:</strong> Data available for analysis within 30 seconds</li>
                <li><strong>Auto-scaling:</strong> Handles traffic spikes without manual intervention</li>
            </ul>
            
            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Data Ingestion:</strong> AWS Kinesis Data Streams for real-time data collection</li>
                <li><strong>Processing:</strong> AWS Lambda functions for data transformation</li>
                <li><strong>Storage:</strong> Amazon Redshift for data warehouse, S3 for raw data</li>
                <li><strong>Orchestration:</strong> AWS Step Functions for workflow management</li>
                <li><strong>Monitoring:</strong> CloudWatch, X-Ray for observability</li>
                <li><strong>Security:</strong> IAM roles, VPC endpoints, encryption at rest and in transit</li>
            </ul>
        `,
        technologies: ["AWS Lambda", "Kinesis", "Redshift", "Python", "CloudFormation", "Step Functions", "S3"],
        duration: "6 months",
        teamSize: "8 developers",
        role: "Senior Cloud Architect",
        results: {
            eventsProcessed: "1M+ daily",
            costSavings: "60%",
            processingLatency: "<30 seconds",
            uptime: "99.95%"
        }
    },
    "hybrid-migration": {
        title: "Hybrid Cloud Migration Strategy",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Led a comprehensive hybrid cloud migration strategy for a Fortune 500 company, migrating 50+ legacy applications from on-premises VMware infrastructure to Azure cloud while maintaining zero downtime and ensuring security compliance.</p>
            
            <h4>Key Achievements</h4>
            <ul>
                <li><strong>Zero Downtime Migration:</strong> All applications migrated without service interruption</li>
                <li><strong>50+ Applications:</strong> Successfully migrated to Azure cloud</li>
                <li><strong>30% Performance Improvement:</strong> Enhanced application performance post-migration</li>
                <li><strong>Compliance:</strong> Maintained SOC2 and GDPR compliance throughout migration</li>
            </ul>
            
            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Assessment:</strong> Azure Migrate for discovery and assessment</li>
                <li><strong>Migration Tools:</strong> Azure Site Recovery, Azure Migrate</li>
                <li><strong>Infrastructure:</strong> Terraform for Infrastructure as Code</li>
                <li><strong>Automation:</strong> Ansible playbooks for configuration management</li>
                <li><strong>Monitoring:</strong> Azure Monitor, Log Analytics for observability</li>
                <li><strong>Security:</strong> Azure Security Center, Azure AD integration</li>
            </ul>
        `,
        technologies: ["Azure", "VMware", "Terraform", "Ansible", "Azure DevOps", "Azure Migrate", "Site Recovery"],
        duration: "12 months",
        teamSize: "15 developers",
        role: "Lead Cloud Migration Architect",
        results: {
            applicationsMigrated: "50+",
            downtime: "0 hours",
            performanceImprovement: "30%",
            complianceMaintained: "100%"
        }
    },
    "microservices-platform": {
        title: "Cloud-Native Microservices Platform",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Designed and implemented a comprehensive cloud-native microservices platform on AWS EKS, serving as the foundation for multiple applications. The platform includes service mesh, API gateway, monitoring, and security features.</p>
            
            <h4>Key Achievements</h4>
            <ul>
                <li><strong>50+ Microservices:</strong> Successfully deployed and managed</li>
                <li><strong>99.99% Uptime:</strong> High availability through multi-AZ deployment</li>
                <li><strong>Auto-scaling:</strong> Horizontal Pod Autoscaler for dynamic scaling</li>
                <li><strong>Service Mesh:</strong> Istio implementation for traffic management</li>
            </ul>
            
            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Orchestration:</strong> Amazon EKS (Kubernetes) cluster</li>
                <li><strong>Service Mesh:</strong> Istio for service-to-service communication</li>
                <li><strong>API Gateway:</strong> Kong Gateway for external API management</li>
                <li><strong>Monitoring:</strong> Prometheus, Grafana, Jaeger for observability</li>
                <li><strong>Security:</strong> Pod Security Policies, Network Policies, RBAC</li>
                <li><strong>CI/CD:</strong> GitLab CI/CD with ArgoCD for GitOps</li>
            </ul>
        `,
        technologies: ["Kubernetes", "Istio", "AWS EKS", "Prometheus", "Grafana", "Kong", "ArgoCD", "Docker"],
        duration: "10 months",
        teamSize: "20 developers",
        role: "Principal Cloud Architect",
        results: {
            microservices: "50+",
            uptime: "99.99%",
            scalingEfficiency: "85%",
            deploymentFrequency: "Daily"
        }
    },
    "ai-ml-infrastructure": {
        title: "AI/ML Cloud Infrastructure",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Architected a comprehensive AI/ML infrastructure supporting multiple machine learning teams across Azure ML and AWS SageMaker. The platform enables end-to-end ML workflows from data ingestion to model deployment and monitoring.</p>
            
            <h4>Key Achievements</h4>
            <ul>
                <li><strong>100+ ML Models:</strong> Successfully deployed and managed</li>
                <li><strong>MLOps Pipeline:</strong> Automated model training, validation, and deployment</li>
                <li><strong>A/B Testing:</strong> Automated model comparison and rollback capabilities</li>
                <li><strong>Model Versioning:</strong> Complete model lifecycle management</li>
            </ul>
            
            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>ML Platforms:</strong> Azure ML, AWS SageMaker for model development</li>
                <li><strong>Orchestration:</strong> Kubeflow for ML workflow management</li>
                <li><strong>Model Registry:</strong> MLflow for model versioning and tracking</li>
                <li><strong>Containerization:</strong> Docker containers for model serving</li>
                <li><strong>Monitoring:</strong> Custom dashboards for model performance tracking</li>
                <li><strong>Data Pipeline:</strong> Apache Airflow for data preprocessing workflows</li>
            </ul>
        `,
        technologies: ["Azure ML", "AWS SageMaker", "MLflow", "Kubeflow", "Docker", "Apache Airflow", "Python", "TensorFlow"],
        duration: "9 months",
        teamSize: "12 developers",
        role: "AI/ML Cloud Architect",
        results: {
            modelsDeployed: "100+",
            mLOpsEfficiency: "90%",
            modelAccuracy: "95%",
            deploymentTime: "<2 hours"
        }
    },
    "disaster-recovery": {
        title: "Disaster Recovery & Backup Solution",
        fullDescription: `
            <h4>Project Overview</h4>
            <p>Implemented a comprehensive disaster recovery and backup solution across multiple AWS and Azure regions, ensuring business continuity and compliance with SOC2 and GDPR requirements for a financial services company.</p>
            
            <h4>Key Achievements</h4>
            <ul>
                <li><strong>RTO < 4 Hours:</strong> Recovery Time Objective achieved</li>
                <li><strong>RPO < 15 Minutes:</strong> Recovery Point Objective achieved</li>
                <li><strong>Multi-Region:</strong> Active-active setup across 3 regions</li>
                <li><strong>Compliance:</strong> SOC2 Type II and GDPR compliance maintained</li>
            </ul>
            
            <h4>Technical Architecture</h4>
            <ul>
                <li><strong>Backup Strategy:</strong> Veeam Backup for AWS, Azure Backup</li>
                <li><strong>Replication:</strong> Cross-region data replication</li>
                <li><strong>Monitoring:</strong> CloudWatch, Azure Monitor for DR monitoring</li>
                <li><strong>Automation:</strong> Terraform for infrastructure provisioning</li>
                <li><strong>Testing:</strong> Automated DR testing every quarter</li>
                <li><strong>Security:</strong> Encryption, access controls, audit logging</li>
            </ul>
        `,
        technologies: ["AWS", "Azure", "Veeam", "Terraform", "CloudWatch", "Azure Monitor", "RDS", "S3"],
        duration: "6 months",
        teamSize: "10 developers",
        role: "Senior Cloud Security Architect",
        results: {
            rto: "<4 hours",
            rpo: "<15 minutes",
            regions: "3",
            complianceScore: "100%"
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
                        <button type="button" class="btn btn-primary" onclick="window.open('https://www.linkedin.com/in/efosa-ojomo-4882a015a/', '_blank')">
                            <i class="fab fa-linkedin me-2"></i>Connect on LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

document.addEventListener('DOMContentLoaded', function() {
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

    // Netlify form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Let Netlify handle the form submission and redirect to thank you page
            // The form will automatically redirect to /thank-you.html after successful submission
        });
    }
});