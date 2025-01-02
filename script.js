
document.addEventListener('DOMContentLoaded', () => {
    const members = [
        { name: 'Sanskar soni', role: 'Web Developer' },
        { name: 'Shivang sikhar singh', role: 'UI/UX Designer' },
        { name: 'Sumit kumar gupta', role:'Backhend developer'},
        { name:'Sarthak tiwari', role:'Frontend developer'},
        { name:'Shashank singh', role:'Creative ideas'},
        { name:'Shresth sahu', role:'Management',},
    ];

    const projects = [
        { title: 'Project 1', description: 'Description of project 1', link: '#' },
        { title: 'Project 2', description: 'Description of project 2', link: '#' },
        // ... more projects
    ];

    const memberList = document.querySelector('.member-list');
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p>`;
        memberList.appendChild(memberDiv);
    });

    const projectList = document.querySelector('.project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.link}" target="_blank">View Project</a>`;
        projectList.appendChild(projectDiv);
    });
    const branchSelect = document.getElementById('branch-select');
    const syllabusContent = document.getElementById('syllabus-content');

    branchSelect.addEventListener('change', () => {
        const selectedBranch = branchSelect.value;
        if (selectedBranch) {
            // Replace with actual syllabus data fetching or links.
            syllabusContent.innerHTML = `<p>Syllabus for ${selectedBranch}: Coming soon or <a href = "path/to/${selectedBranch}.pdf">Download here</a></p>`;
        } else {
            syllabusContent.innerHTML = '';
        }
    });
});
// script.js (No changes needed from the previous response for core functionality)
document.addEventListener('DOMContentLoaded', () => {
    // ... (Member and project population code remains the same)
      const branchSelect = document.getElementById('branch-select');
    const syllabusContent = document.getElementById('syllabus-content');

    branchSelect.addEventListener('change', () => {
        const selectedBranch = branchSelect.value;
        if (selectedBranch) {
            // Replace with actual syllabus data fetching or links.
            syllabusContent.innerHTML = `<p>Syllabus for ${selectedBranch}: Coming soon or <a href = "path/to/${selectedBranch}.pdf">Download here</a></p>`;
        } else {
            syllabusContent.innerHTML = '';
        }
    });

});
// Existing code...

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  // Add functionality to handle form submission (e.g., validation, sending email)
  alert('Your message has been submitted!');
});