// Outer Variables
var card = document.querySelector("#card-content")
var activityHeader = document.querySelector("#new")

// Activities
var studyBtn = document.querySelector('#study-box');
var meditateBtn = document.querySelector('#meditate-box');
var exerciseBtn = document.querySelector('#exercise-box');

// on & off buttons 
var sOn = document.querySelector('#s-on')
var sOff = document.querySelector('#s-off')
var mOn = document.querySelector('#m-on')
var mOff = document.querySelector('#m-off')
var eOn = document.querySelector('#e-on')
var eOff = document.querySelector('#e-off')

// Forms
var hiddenInput = document.querySelector('#hidden-input')
var studyLabel = document.querySelector('#study-label')
var meditateLabel = document.querySelector('#meditate-label')
var exerciseLabel = document.querySelector('#exercise-label')
var startActivityBtn = document.querySelector('#start-btn')
var logActivityBtn = document.querySelector('#log-btn')
var createNewActivityBtn = document.querySelector('#create-new-activity-btn')

// Warnings
var goalWarning = document.querySelector('#warning-1')
var minutesWarning = document.querySelector('#warning-2')
var secondsWarning = document.querySelector('#warning-3')

//timer
var timerBox = document.querySelector("#timer-box");
var timer = document.querySelector("#timer")
var timeLeft = document.querySelector("#time")
var ring = document.querySelector("#ring")
var activityHeader = document.querySelector('#userActivity')
var pastActivitiesCard = document.querySelector('#past-activities-card')
var pastActivitiesDefault = document.querySelector('#past-activities-default')

// Event Listeners
window.addEventListener('load', createActivityCard)
studyBtn.addEventListener('click', activateStudy);
meditateBtn.addEventListener('click', activateMeditate);
exerciseBtn.addEventListener('click', activateExcercise);
ring.addEventListener('click', triggerTimer)

function activateStudy() {
  hiddenInput.innerHTML = `<input type="hidden" name="category" value="Study">`
  studyBtn.style.borderColor = ('var(--study)')
  ring.style.borderColor = ('var(--study)')
  studyLabel.style.color = ('var(--study)')
  exerciseBtn.style.borderColor = ('var(--whiteText)')
  meditateBtn.style.borderColor = ('var(--whiteText)')
  meditateLabel.style.color = ('var(--whiteText)')
  exerciseLabel.style.color = ('var(--whiteText)')
  show(sOn)
  show(mOff)
  show(eOff)
  hide(sOff)
  hide(mOn)
  hide(eOn)
}

function activateMeditate() {
  hiddenInput.innerHTML = `<input type="hidden" name="category" value="Meditate">`
  meditateBtn.style.borderColor = ('var(--meditate)')
  ring.style.borderColor = ('var(--meditate)')
  meditateLabel.style.color= ('var(--meditate')
  exerciseBtn.style.borderColor = ('var(--whiteText)')
  studyBtn.style.borderColor = ('var(--whiteText)')
  studyLabel.style.color = ('var(--whiteText)')
  exerciseLabel.style.color = ('var(--whiteText)')
  hide(mOff)
  hide(eOn)
  hide(sOn)
  show(mOn)
  show(eOff)
  show(sOff)
}

function activateExcercise() {
  hiddenInput.innerHTML = `<input type="hidden" name="category" value="Exercise">`
  exerciseBtn.style.borderColor = ('var(--exercise)')
  ring.style.borderColor = ('var(--exercise)')
  exerciseLabel.style.color= ('var(--exercise')
  exerciseBtn.style.color = ('var(--exercise)')
  meditateBtn.style.borderColor = ('var(--whiteText)')
  studyBtn.style.borderColor = ('var(--whiteText)')
  studyLabel.style.color = ('var(--whiteText)')
  meditateLabel.style.color = ('var(--whiteText)')
  show(eOn)
  show(mOff)
  show(sOff)
  hide(eOff)
  hide(mOn)
  hide(sOn)
}


function createActivity(form) {
  form.goal.value === "" ? show(goalWarning) : hide(goalWarning)
  !form.minutes.value ? show(minutesWarning) : hide(minutesWarning)
  !form.seconds.value ? show(secondsWarning) : hide(secondsWarning)
  if(form.goal.value && form.minutes.value && form.seconds.value) {
    currentActivity = new Activity(form.category.value, form.goal.value, parseInt(form.minutes.value), parseInt(form.seconds.value), generateRandomID());
    showTimer()
    show(timerBox)
    hide(card)
    hide(logActivityBtn)
  }
}

function logActivity() {
  hide(timerBox)
  hide(logActivityBtn)
  show(createNewActivityBtn)
  hide(pastActivitiesDefault)
  show(pastActivitiesCard)
  createActivityCard()
  start.textContent = "START!"
  currentActivity.saveToStorage()

}


function createActivityCard() {
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
      pastActivitiesCard.innerHTML += `<div id="past-card" class="card-features flex">
      <div id="card-category"></div>
      <div id="activityTimeContainer" class="flex">
        <h3 id="past-card-activity">${activities[i].category}</h3>
        <h4 id="past-card-time">${activities[i].minutes} MIN ${activities[i].seconds} SECONDS</h4>
      </div>
      <h5 id="past-card-goal">${activities[i].description}</h5>
      </div>`
    }
  }
  return activities
}

function makeNewActivity() {
  hide(createNewActivityBtn)
  show(card)
}


function showTimer() {
  var minutes = currentActivity.minutes < 10 ? "0" + currentActivity.minutes : currentActivity.minutes;
  var seconds = currentActivity.seconds < 10 ? "0" + currentActivity.seconds : currentActivity.seconds;
  activityHeader.textContent = `${currentActivity.description}`
  timeLeft.textContent = minutes + ":" + seconds;
}


function triggerTimer() {
  beginTimer(currentActivity.minutes, currentActivity.seconds)
}

function beginTimer(minutes, seconds) {
  timer = new CountDownTimer(minutes, seconds);
  timer.onTick(format(timeLeft)).onTick(restart).start();
  function restart() {
    if (this.expired()) {
      setTimeout(function () {
        currentActivity.markComplete();
        show(logActivityBtn)
        start.textContent = `COMPLETE!`
        return alert("Congrats! You made it!");
      }, 1000);
    }
  }
  function format(timeLeft) {
    return function (minutes, seconds) {
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      timeLeft.textContent = minutes + ':' + seconds;
    };
  }
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

function updateHeader() {
  activityHeader.innerText = "Current Activity"
}