// Activities
var exerciseBtn = document.querySelector('#exerciseBox');
var meditateBtn = document.querySelector('#meditateBox');
var studyBtn = document.querySelector('#studyBox');

// On & off buttons 
var eOn = document.querySelector('#eOn')
var eOff = document.querySelector('#eOff')
var mOn = document.querySelector('#mOn')
var mOff = document.querySelector('#mOff')
var sOn = document.querySelector('#sOn')
var sOff = document.querySelector('#sOff')

// Forms
var categoryValue = document.querySelector('#category')
var createNewActivityBtn = document.querySelector('#createNewActivityBtn')
var exerciseBtn = document.querySelector('#exerciseBtn')
var goalValue = document.querySelector('#goal')
var hiddenInput = document.querySelector('#hiddenInput')
var logActivityBtn = document.querySelector('#logBtn')
var meditateBtn = document.querySelector('#meditateBtn')
var minutesValue = document.querySelector('#minutes')
var secondsValue = document.querySelector('#seconds')
var startActivityBtn = document.querySelector('#startBtn')
var studyBtn = document.querySelector('#studyBtn')

// Outer Card
var activityHeader = document.querySelector('#new')
var card = document.querySelector('#cardContent')

// Timer Card 
var activityHeader = document.querySelector('#userActivity')
var ring = document.querySelector('#ring')
var timer = document.querySelector('#timer')
var timerCard = document.querySelector('#timerCard');
var timeLeft = document.querySelector('#time')

// Activity Log
var pastActivitiesCard = document.querySelector('#pastActivitiesCard')
var pastActivitiesDefault = document.querySelector('#pastActivitiesDefault')
var scrollMsg = document.querySelector('#scrollMsg')

// Warnings
var categoryWarning = document.querySelector('#warning0')
var goalWarning = document.querySelector('#warning1')
var minutesWarning = document.querySelector('#warning2')
var secondsWarning = document.querySelector('#warning3')

// Event Listeners 
window.addEventListener('load', createActivityCard)
createNewActivityBtn.addEventListener('click', resetScene)
exerciseBtn.addEventListener('click', activateExcercise);
logActivityBtn.addEventListener('click', logActivity);
meditateBtn.addEventListener('click', activateMeditate);
ring.addEventListener('click', callTimerMethod)
startActivityBtn.addEventListener('click', createActivity);
studyBtn.addEventListener('click', activateStudy);


// Event Handlers
function activateStudy() {
  categoryValue.id = "category study"
  exerciseBtn.style.borderColor = ('var(--white)')
  exerciseLabel.style.color = ('var(--white)')
  meditateBtn.style.borderColor = ('var(--white)')
  meditateLabel.style.color = ('var(--white)')
  ring.style.borderColor = ('var(--study)')
  studyBtn.style.borderColor = ('var(--study)')
  studyLabel.style.color = ('var(--study)')
  hide(eOn)
  hide(mOn)
  hide(sOff)
  show(eOff)
  show(mOff)
  show(sOn)
}

function activateMeditate() {
  categoryValue.id = "category meditate"
  exerciseBtn.style.borderColor = ('var(--white)')
  exerciseLabel.style.color = ('var(--white)')
  meditateBtn.style.borderColor = ('var(--meditate)')
  meditateLabel.style.color= ('var(--meditate')
  ring.style.borderColor = ('var(--meditate)')
  studyBtn.style.borderColor = ('var(--white)')
  studyBtn.style.color = ('var(--white)')
  hide(eOn)
  hide(mOff)
  hide(sOn)
  show(eOff)
  show(mOn)
  show(sOff)
}

function activateExcercise() {
  categoryValue.id = "category exercise"
  exerciseBtn.style.borderColor = ('var(--exercise)')
  exerciseBtn.style.color = ('var(--exercise)')
  exerciseLabel.style.color= ('var(--exercise')
  meditateBtn.style.borderColor = ('var(--white)')
  meditateLabel.style.color = ('var(--white)')
  ring.style.borderColor = ('var(--exercise)')
  studyBtn.style.borderColor = ('var(--white)')
  studyBtn.style.color = ('var(--white)')
  show(eOn)
  show(mOff)
  show(sOff)
  hide(eOff)
  hide(mOn)
  hide(sOn)
}

function createActivity() {
  var selectedCategory;
  if (categoryValue.id === "category study") {
    selectedCategory = "Study"
  } else if (categoryValue.id === "category meditate") {
    selectedCategory = "Meditate"
  } else if (categoryValue.id === "category exercise") {
    selectedCategory = "Exercise"
  }
  categoryValue.id === "category" ? displayWarning(categoryWarning) : hide(categoryWarning)
  goalValue.value === "" ? displayWarning(goalWarning) : hide(goalWarning)
  !minutesValue.value ? displayWarning(minutesWarning) : hide(minutesWarning)
  !secondsValue.value ? displayWarning(secondsWarning) : hide(secondsWarning)
  if(selectedCategory && goalValue.value && minutesValue.value && secondsValue.value) {
    currentActivity = new Activity(selectedCategory, goalValue.value, parseInt(minutesValue.value), parseInt(secondsValue.value), generateRandomID());
    showTimer()
  }
}

function displayWarning(warning) {
  resetFadeOut(warning)
  show(warning)
  animateFadeOut(warning)
}

function showTimer() {
  hide(card)
  hide(logActivityBtn)
  show(timerCard)
  var minutes = currentActivity.minutes < 10 ? '0' + currentActivity.minutes : currentActivity.minutes;
  var seconds = currentActivity.seconds < 10 ? '0' + currentActivity.seconds : currentActivity.seconds;
  activityHeader.textContent = `${currentActivity.description}`
  timeLeft.textContent = minutes + ':' + seconds;
}

function callTimerMethod() {
  hide(createNewActivityBtn)
  hide(card)
  currentActivity.startTimer();
}

function logActivity() {
  hide(timerCard)
  hide(logActivityBtn)
  show(createNewActivityBtn)
  hide(pastActivitiesDefault)
  show(pastActivitiesCard)
  start.textContent = 'START!'
  currentActivity.saveToStorage()
}

function createActivityCard () {
  var parsed = JSON.parse(localStorage.getItem('Activities'));
  if (!parsed) {
    hide(pastActivitiesCard)
    show(pastActivitiesDefault)
  } else {
    activities = parsed;
    hide(pastActivitiesDefault)
    show(pastActivitiesCard)
    pastActivitiesCard.innerHTML = ``
    for (var i = 0; i < activities.length; i++) {
      pastActivitiesCard.innerHTML += `<div id='pastCard' class='card-features past-card flex'>
      <div id='cardCategory' class='card-category ${changeCategoryColor(activities[i].category)}'></div>
      <div id='activityTimeContainer' class='activity-time-container flex'>
        <h3 id='pastCard-activity'>${activities[i].category}</h3>
        <h4 id='pastCard-time'>${activities[i].minutes} MIN ${activities[i].seconds} SECONDS</h4>
      </div>
      <h5 id='pastCard-goal'>${activities[i].description}</h5>
      </div>`
    }
  }
  if (parsed.length > 4) {
    show(scrollMsg) 
    animateFadeIn(scrollMsg)
  } 
  return activities
}

function resetScene() {
    hide(createNewActivityBtn)
    resetInputs()
    show(card)
}

// Helper Functions
function generateRandomID() {
  return Math.floor((1 + Math.random()) * 0x100000)
}

function animateFadeOut(e) {
  e.classList.add('fade-out')
}

function changeCategoryColor(category) {
var color = ''
category === 'Study' ? color = 'green' 
: category === 'Meditate' ? color = 'purple' 
: category === 'Exercise' ? color = 'red' 
: color='var(--white)'
return color
}

function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}

function resetBtns() {
  hide(eOn)
  hide(mOn)
  hide(sOn)
  show(eOff)
  show(mOff)
  show(sOff)
  exerciseBtn.style.borderColor = ('var(--white')
  exerciseBtn.style.color = ('var(--white')
  exerciseLabel.style.color= ('var(--white)')
  studyBtn.style.borderColor = ('var(--white)')
  studyBtn.style.color = ('var(--white)')
  meditateBtn.style.borderColor = ('var(--white)')
  meditateBtn.style.color = ('var(--white)')
  meditateLabel.style.color = ('var(--white)')
  ring.style.borderColor = ('var(--white')
  studyLabel.style.color = ('var(--white)')
}

function resetFadeOut(e) {
  e.classList.remove('fade-out')
  void e.offsetWidth;
}

function resetInputs() {
  resetBtns()
  goalValue.value = ""
  minutesValue.value = ""
  secondsValue.value = ""
}

function updateHeader() {
  activityHeader.innerText = 'Current Activity'
}