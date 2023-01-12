const projectLibrary = [];
const works = document.querySelector('#portfolio');
const workTemplate = document.querySelector('#work-template');
const modal = document.querySelector('.hide-modal');

const ProjectDetails = (name, jobInfo, image, description, tech) => ({
  name, jobInfo, image, description, tech,
});

const tonicJobInfo = {
  client: 'FACEBOOK',
  role: 'Full Stack Dev',
  year: '2015',
};
const tonicProject = ProjectDetails('Tonic', tonicJobInfo, 'images/portfolio/snapshot-arteto.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', ['HTML', 'CSS', 'JavaScript']);

function displayProjects(projects) {
  projects.forEach((proj, i) => {
    const projClone = workTemplate.content.cloneNode(true);
    projClone.querySelector('.work-card-snapshot').src = proj.image;
    projClone.querySelector('.work-title').innerText = proj.name;
    projClone.querySelector('.work-client').innerText = proj.jobInfo.client;
    projClone.querySelector('.work-role').innerText = proj.jobInfo.role;
    projClone.querySelector('.work-year').innerText = proj.jobInfo.year;
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

projectLibrary.push(tonicProject);

displayProjects(projectLibrary);

function openModal(e) {
  const proj = projectLibrary[e.target.value];
  modal.querySelector('.work-title').innerText = proj.name;
  modal.querySelector('.work-client').innerText = proj.jobInfo.client;
  modal.querySelector('.work-role').innerText = proj.jobInfo.role;
  modal.querySelector('.work-year').innerText = proj.jobInfo.year;
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