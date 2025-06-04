// Lista dos seus projetos
const projects = [
    {
        name: "Projeto 1",
        link: "https://github.com/seuusuario/projeto1"
    },
    {
        name: "Projeto 2",
        link: "https://github.com/seuusuario/projeto2"
    },
    {
        name: "Projeto 3",
        link: "https://github.com/seuusuario/projeto3"
    }
];

// Função para criar os elementos HTML dos projetos
const projectsList = document.getElementById('projects-list');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';

    projectDiv.innerHTML = `
        <h3>${project.name}</h3>
        <a href="${project.link}" target="_blank">Ver Projeto</a>
    `;

    projectsList.appendChild(projectDiv);
});
