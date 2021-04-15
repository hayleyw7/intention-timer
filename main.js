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
// Forms
var goalForm = document.querySelector('#goal')
var minutesForm = document.querySelector('#minutes')
var secondsForm = document.querySelector('#seconds')
var startBtn = document.querySelector('#button-container')
// Warning
var error = document.getElementById('#warning')
var goalWarning = document.querySelector('#warning-1')
var minutesWarning = document.querySelector('#warning-2')
var secondsWarning = document.querySelector('#warning-3')

// Event Listeners
studyBtn.addEventListener('click', activateStudy);
meditateBtn.addEventListener('click', activateMeditate);
exerciseBtn.addEventListener('click', activateExcercise);
startBtn.addEventListener('click', something)

// Event Handlers
// Buttons
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

function something(e) {
e.preventDefault()
goalForm.value === "" ? show(goalWarning) : hide(goalWarning)
!minutesForm.value ? show(minutesWarning) : hide(minutesWarning)
!secondsForm.value ? show(secondsWarning) : hide(secondsWarning)
// if(goalForm.value === "") { 
//   show(goalWarning)
// } else if (!minutesForm.value) {
//   show(minutesWarning)
// } else (
//   show(secondsWarning)
// )
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

function animateFade(e) {
  e.classList.add('fade')
}

function resetFade(e) {
  e.classList.toggle('fade')
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

// function createActivity(form) {
//   currentActivity = new Activity(form.category.value, form.goal.value, form.minutes.value, form.seconds.value, generateRandomID());
//   displayCountdown();
// }

// var activitiesSection = document.querySelector('#new-container');
// function displayCountdown() {
//   activitiesSection.innerHTML = `
//   <h2 id="new">Completed Activity</h2>
//   <article id="card">
//     ${currentActivity.description}
//     ${currentActivity.minutes}:${currentActivity.seconds}
//     // start button with id="startBTN"
//   </article>
//   `
// }
