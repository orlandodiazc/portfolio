const works = document.querySelector('#portfolio');
const workTemplate = document.querySelector('#work-template');
const modal = document.querySelector('.hide-modal');

const projectLibrary = [
  {
    name: 'asdf',
    role: 'asdf',
    year: '2020',
    image: '../images/portfolio/snapshot-tonic.png',
    description: 'ararga',
    tech: ['asdfaf', 'asdfa', 'awefawef'],
  },
  {
    name: 'asdf',
    role: 'asdf',
    year: '2021',
    image: 'https://picsum.photos/300/200',
    description: 'ararga',
    tech: ['asdfaf', 'asdfa', 'awefawef'],
  },
  {
    name: 'asdf',
    role: 'asdf',
    year: '2022',
    image: 'https://picsum.photos/300/200',
    description: 'ararga',
    tech: ['asdfaf', 'asdfa', 'awefawef'],
  },
];
function displayProjects(projects) {
  projects.forEach((proj, i) => {
    const projClone = workTemplate.content.cloneNode(true);
    projClone.querySelector('.work-card-snapshot').src = proj.image;
    projClone.querySelector('.work-title').innerText = proj.name;
    // projClone.querySelector('.work-client').innerText = proj.jobInfo.client;
    projClone.querySelector('.work-role').innerText = proj.role;
    projClone.querySelector('.work-year').innerText = proj.year;
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
  // modal.querySelector('.work-client').innerText = proj.jobInfo.client;
  modal.querySelector('.work-role').innerText = proj.role;
  modal.querySelector('.work-year').innerText = proj.year;
  modal.querySelector('.work-card-snapshot').src = proj.image;
  modal.querySelector('.work-description').innerText = proj.description;
  const workTags = modal.querySelector('.work-tags');
  workTags.replaceChildren();
  proj.tech.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    workTags.appendChild(li);
  });
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

const btnSeeProjects = document.querySelectorAll('.work-view-btn');
const btnExitModal = document.querySelector('.exit-modal');

btnSeeProjects.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

btnExitModal.addEventListener('click', closeModal);
