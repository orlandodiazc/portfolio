const works = document.querySelector('#portfolio');
const workTemplate = document.querySelector('#work-template');
const modal = document.querySelector('.hide-modal');

// const projectLibrary = [
//   {
//     name: 'Space Travelers',
//     image: '../images/portfolio/spacetravelers.png',
//     description: 'SPA that shows up-to-date data on Space-X missions and rockets.',
//     tech: ['React', 'Redux', 'Redux Toolkit', 'Bootstrap'],
//     liveLink: 'https://lighthearted-sfogliatella-77e09a.netlify.app/',
//     sourceLink: 'https://github.com/orlandodiazc/event-reservations',
//   },
//   {
//     name: 'Mathematicians',
//     image: '../images/portfolio/mathematicians.png',
//     description:
//       'Single Page Application that allows the user to make quick calculations, it also has welcome and quote pages',
//     tech: ['React', 'Jest', 'Bootstrap', 'React Testing Library'],
//     liveLink: 'https://effulgent-douhua-34f1cc.netlify.app/',
//     sourceLink: 'https://github.com/orlandodiazc/mathematicians',
//   },
//   {
//     name: 'Todo List',
//     image: '../images/portfolio/todolist.png',
//     description:
//       'To do list is JavaScript project that allows you to add, delete and edit your daily tasks.',
//     tech: ['Javascript', 'CSS', 'HTML5', 'Webpack'],
//     liveLink: 'https://stunning-bonbon-dbeffd.netlify.app/',
//     sourceLink: 'https://github.com/orlandodiazc/to-do-list',
//   },
// ];

const projectLibrary = [
  {
    name: 'Space Travelers',
    image: '../images/portfolio/spacetravelers.png',
    description:
      'Aplicación de una página que permite explorar las próximas misiones y cohetes de SpaceX, además podrás seleccionar a cuales desea entrar o reservar.',
    tech: ['React', 'Redux', 'Redux Toolkit', 'Bootstrap'],
    liveLink: 'https://lighthearted-sfogliatella-77e09a.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/event-reservations',
  },
  {
    name: 'Mathematicians',
    image: '../images/portfolio/mathematicians.png',
    description:
      'Website que permite al usuario hacer cálculos matemáticos rápidos, además tiene páginas de bienvenida y frases.',
    tech: ['React', 'Jest', 'Bootstrap', 'React Testing Library'],
    liveLink: 'https://effulgent-douhua-34f1cc.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/mathematicians',
  },
  {
    name: 'Todo List',
    image: '../images/portfolio/todolist.png',
    description:
      'To-do List es un proyecto de JavaScript que permite agregar, eliminar y editar tareas diarias.',
    tech: ['Javascript', 'CSS', 'HTML5', 'Webpack'],
    liveLink: 'https://stunning-bonbon-dbeffd.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/to-do-list',
  },
];

function displayProjects(projects) {
  projects.forEach((proj, i) => {
    const projClone = workTemplate.content.cloneNode(true);
    projClone.querySelector('.work-card-snapshot').src = proj.image;
    projClone.querySelector('.work-title').innerText = proj.name;
    projClone.querySelector('.work-description').innerText = proj.description;
    const workTags = projClone.querySelector('.work-tags');
    proj.tech.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = item;
      workTags.appendChild(li);
    });
    projClone.querySelector('.work-view-btn').value = i;
    works.appendChild(projClone);
  });
}

displayProjects(projectLibrary);

function openModal(e) {
  const proj = projectLibrary[e.target.value];
  modal.querySelector('.work-title').innerText = proj.name;
  modal.querySelector('.work-card-snapshot').src = proj.image;
  modal.querySelector('.work-description').innerText = proj.description;
  modal.querySelector('#btn-live').href = proj.liveLink;
  modal.querySelector('#btn-source').href = proj.sourceLink;
  const workTags = modal.querySelector('.work-tags');
  workTags.replaceChildren();
  proj.tech.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    workTags.appendChild(li);
  });
  modal.style.display = 'grid';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

const btnSeeProjects = document.querySelectorAll('.work-view-btn');
const btnExitModal = document.querySelector('.exit-modal');

btnSeeProjects.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

btnExitModal.addEventListener('click', closeModal);
