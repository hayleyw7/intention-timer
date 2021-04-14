// Variables
// Activities
var studyBtn = document.querySelector('#study-box');
var meditateBtn = document.querySelector('#meditate-box');
var exerciseBtn = document.querySelector('#exercise-box');
var activityBtns = document.querySelectorAll('.box')
  // on & off buttons
var sOn = document.querySelector('#s-on')
var sOff = document.querySelector('#s-off')
var mOn = document.querySelector('#m-on')
var mOff = document.querySelector('#m-off')
var eOn = document.querySelector('#e-on')
var eOff = document.querySelector('#e-off')
  //borders 

// Event Listeners
studyBtn.addEventListener('click', activateStudy);
meditateBtn.addEventListener('click', activateMeditate);
exerciseBtn.addEventListener('click', activateExcercise);


// Event Handlers
function activateStudy() {
  studyBtn.style.borderColor = ('var(--study)')
  show(sOn)
  show(mOff)
  show(eOff)
  hide(sOff)
  hide(mOn)
  hide(eOn)
}

function activateMeditate() {
  meditateBtn.style.borderColor = ('var(--meditate)')
  hide(mOff)
  hide(eOn)
  hide(sOn)
  show(mOn)
  show(eOff)
  show(sOff)
}
  
function activateExcercise() {
  exerciseBtn.style.borderColor = ('var(--exercise)')
  show(eOn)
  show(mOff)
  show(sOff)
  hide(eOff)
  hide(mOn)
  hide(sOn)
}  


   



function createActivity(form) {
  currentActivity = new Activity(form.category.value, form.goal.value, form.minutes.value, form.seconds.value, generateRandomID());
  displayCountdown();
}

var activitiesSection = document.querySelector('#new-container');
function displayCountdown() {
  activitiesSection.innerHTML = `
  <h2 id="new">Completed Activity</h2>
  <article id="card">
    ${currentActivity.description}
    ${currentActivity.minutes}:${currentActivity.seconds}
    // start button with id="startBTN"
  </article>
  `
}

// Helper Functions
function generateRandomID() {
  return Math.floor((1 + Math.random()) * 0x100000)
}

function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}


// function makeStudyImageChange() {
//   studyBtn.innerHTML = `<input type="hidden" name="category" value="Study"><img src="assets/study-active.svg"/><h3>Study</h3></input>`
// }
// function makeMeditateBtnChange() {
//   meditateBtn.innerHTML = `<input type="hidden" name="category" value="Meditate"><img src="assets/meditate-active.svg"/><h3>Meditate</h3></input>`
// }
// function makeExerciseBtnChange() {
//   exerciseBtn.innerHTML = `<input type="hidden" name="category" value="Exercise"><img src="assets/exercise-active.svg"/><h3>Exercise</h3></input>`
// }
