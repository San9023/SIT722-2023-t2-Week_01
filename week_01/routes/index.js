var express = require('express');
var router = express.Router();

const itemList = [
  { 'id': 1, 'title': 'DevOps', 'description': 'An organisational approach for IT where all teams, especially operations and development teams, work together on software development and deployment to boost software production agility and meet business objectives.', 'reference': ' [1] DZone Inc., "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'},
  { 'id': 2, 'title': 'Internal developer platform (IDP)', 'description': 'An IDP is a self-service product that makes operations and deployment work easier for developers to complete. For developers, the IDP will decrease complexity and cognitive stress.', 'reference': ' [2] Octopus Deploy, "DevOps Glossary," Octopus Deploy, https://octopus.com/devops/glossary/'},
  { 'id': 3, 'title': 'Containers', 'description': 'By virtualizing the operating system, containerization—the obvious next step after virtualization—treats each application as its own conceptually separate server. Because containers are immutable, they function precisely the same no matter where they are created, on what hardware, or with what operating system they are running on.', 'reference': ' [3] Plutora, "DevOps at Scale: Terminology Glossary," Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary'},
  { 'id': 4, 'title': 'Containerization', 'description': 'Resource isolation at the OS level (as opposed to machine level), typically in user space (in UNIX-based systems). Depending on the containerization technique, isolated elements can include different things like the file system, disc quota, CPU, memory, I/O rate, root rights, and network access. Compared to machine-level virtualization, it is much more lightweight and meets several isolation requirement sets.', 'reference': ' [4] DZone Inc., "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'},
  { 'id': 5, 'title': 'Docker', 'description': 'The best technology for creating and executing containers is offered by Docker. All significant operating systems support the open source, industry-standard Docker format, or OCI.', 'reference': ' [5] Octopus Deploy, "DevOps Glossary," Octopus Deploy, https://octopus.com/devops/glossary/'},
  { 'id': 6, 'title': 'Deployment', 'description': 'All the procedures necessary to set up and run new software correctly in its environment are collectively referred to as deployment. This usually covers tasks like installation, configuration, running, and testing.', 'reference': ' [6] Plutora, "DevOps at Scale: Terminology Glossary," Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary'},
  { 'id': 7, 'title': 'Deployment Pipeline', 'description': 'A deployment pipeline is an automated representation of your procedure for distributing software to consumers out of version control.', 'reference': ' [7] DZone Inc., "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'},
  { 'id': 8, 'title': 'Git', 'description': 'Distributed development uses the software and source control technique known as Git. Git tracks file modifications, primarily to track source code modifications made by different developers.', 'reference': ' [8] Octopus Deploy, "DevOps Glossary," Octopus Deploy, https://octopus.com/devops/glossary/'},
  { 'id': 9, 'title': 'GitHub', 'description': 'Git-controlled source code is hosted on GitHub, a code repository hosting service. One of the most widely used platforms for hosting code is GitHub. Its well-liked by both corporate organisations and the open-source community', 'reference': ' [9] Octopus Deploy, "DevOps Glossary," Octopus Deploy, https://octopus.com/devops/glossary/'},
  { 'id': 10, 'title': 'Microservices', 'description': 'A software architecture technique called microservices allows you to construct an application out of numerous separate services. Unaware of the distinction, users access the software through a single front end.', 'reference': '[10] Octopus Deploy, "DevOps Glossary," Octopus Deploy, https://octopus.com/devops/glossary/'},
  { 'id': 11, 'title': 'Black Box Testing', 'description': 'A sort of functional testing in which the internal structure, design, and code of software are tested. It differs from white box testing in that the internal design of the programme is unknown to the tester, making it a "black box".', 'reference': '[11] Plutora, "DevOps at Scale: Terminology Glossary," Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary'},
  { 'id': 12, 'title': 'Build Automation', 'description': 'Build automation is the process of scripting and automating the compilation of computer source code into binary code.', 'reference': '[12] Plutora, "DevOps at Scale: Terminology Glossary," Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary'},
  { 'id': 13, 'title': 'Commit', 'description': 'The process of pushing code to a source code repository and logging the changes that were made.', 'reference': '[13] Plutora, "DevOps at Scale: Terminology Glossary," Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary'},
  { 'id': 14, 'title': 'Continuous Delivery (CD)', 'description': 'Continuous delivery, an evolutionary offshoot of continuous integration, is a collection of procedures and practises that automate the SDLC from build through testing, providing a quick feedback loop between a business and its consumers. It is part of the contemporary CI/CD delivery pipeline, along with continuous integration.', 'reference': '[14] Plutora, "DevOps at Scale: Terminology Glossary," Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary'},
  { 'id': 15, 'title': 'Continuous Integration (CI)', 'description': 'Continuous integration is a software development practise that requires developers to integrate work into a common repository numerous times per day in order to receive immediate feedback. It is part of the contemporary CI/CD delivery pipeline, along with continuous delivery.', 'reference': '[15] Plutora, "DevOps at Scale: Terminology Glossary," Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary'},
  { 'id': 16, 'title': 'Continuous Testing', 'description': 'Continuous testing aims to reduce waiting time for developers by testing early and often, and automating as much as possible.', 'reference': '[16] Plutora, "DevOps at Scale: Terminology Glossary," Plutora, https://www.plutora.com/devops-at-scale/terminology-glossary'},
  { 'id': 17, 'title': 'Test Automation', 'description': 'The use of special software (separate from the software being tested) to control the execution of tests and the comparison of actual outcomes with predicted outcomes.', 'reference': '[17] DZone Inc., "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'},
  { 'id': 18, 'title': 'Unit Testing', 'description': 'A testing strategy in which the smallest unit of testable code is isolated from the rest of the software and tested to determine if it functions properly.', 'reference': '[18] DZone Inc., "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'},
  { 'id': 19, 'title': 'Rollback', 'description': 'An automatic or manual operation that restores a database or program to a previously defined state.', 'reference': '[19] DZone Inc., "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'},
  { 'id': 20, 'title': 'Production', 'description': 'The final stage in a deployment pipeline where the software will be used by the intended audience.', 'reference': '[20] DZone Inc., "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'},
  ]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', subhead: 'my webpage here is the description of Popular DevOps terms', items: itemList });
});

module.exports = router;
