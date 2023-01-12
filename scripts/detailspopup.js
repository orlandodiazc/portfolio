const projectLibrary = [];
const works = document.querySelector('#portfolio');

const ProjectDetails = (name, jobInfo, image, description, tech) => ({
  name, jobInfo, image, description, tech,
});

function displayProjects(projects) {
  projects.forEach((proj, i) => {
    works.innerHTML += `<article class="work-card">
          <div class="work-cont">
            <img
              class="work-card-snapshot work-info"
              src="${proj.image}"
              alt="Webpage about daily reads"
            />
            <div class="work-info">
              <h1 class="work-title">${proj.name}</h1>
              <ul class="work-general">
                <li class="work-client">${proj.jobInfo.client}</li>
                <li class="work-client-disc">${proj.jobInfo.role}</li>
                <li class="work-client-disc">${proj.jobInfo.year}</li>
              </ul>
              <p>
                ${proj.description}
              </p>
              <ul class="work-tags">
                <li>${proj.tech[0]}</li>
                <li>${proj.tech[1]}</li>
                <li>${proj.tech[2]}</li>
              </ul>
              <button type="button" class="work-view-btn" value="${i}">See Project</button>
            </div>
          </div>
        </article>`;
  });
}

const tonicJobInfo = {
  client: 'FACEBOOK',
  role: 'Full Stack Dev',
  year: '2015',
};
const tonicProject = ProjectDetails('Tonic', tonicJobInfo, 'images/snapshot-tonic.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', ['HTML', 'CSS', 'JavaScript']);

projectLibrary.push(tonicProject);
projectLibrary.push(tonicProject);
displayProjects(projectLibrary);

const btnSeeProject = document.querySelectorAll('.work-card button');

function closeModalHandler() {
  const workModal = document.querySelector('.work-modal');
  document.body.removeChild(workModal);
  btnSeeProject.forEach((elem) => {
    elem.addEventListener('click', openDetails);
  });
}

function openDetails(e) {
  console.log(e.target.value);
  const proj = projectLibrary[e.target.value];
  document.body.innerHTML += `<article class="work-modal">
          <div class="work-modal-cont">
            <div class="work-cont">
              <div class="work-info">
                <div class="title-cont">
                  <h1 class="work-title">${proj.name}</h1>
                  <button class="btn-exit close-modal" type="button"><img src="images/icons/menu_and_modals/IconCancel.svg"></img></button>
                </div>
                <ul class="work-general">
                  <li class="work-client">${proj.jobInfo.client}</li>
                  <li class="work-client-disc">${proj.jobInfo.role}</li>
                  <li class="work-client-disc">${proj.jobInfo.year}</li>
                </ul>
                <img
                class="work-card-snapshot work-info"
                src="${proj.image}"
                alt="Webpage about daily reads"
                />
              </div>
              <p>
                ${proj.description}
              </p>
              <div class="col">
                <ul class="work-tags">
                  <li>${proj.tech[0]}</li>
                  <li>${proj.tech[1]}</li>
                  <li>${proj.tech[2]}</li>
                </ul> 
                <div class="btn-group">  
                  <button type="button" class="btn-work-modal" >See Live</button>
                  <button type="button" class="btn-work-modal" >See Source</button>
                <div/>
              </div>          
            </div>
          </div>
        </article>`;
  document.body.style.overflow = 'auto';
  const closeModal = document.querySelector('.close-modal');
  closeModal.addEventListener('click', closeModalHandler);
}

btnSeeProject.forEach((elem) => {
  elem.addEventListener('click', openDetails);
});