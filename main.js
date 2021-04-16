// Variables
// Outer Variables
var pastContainer = document.querySelector('#past-container')
var cardContainer = document.querySelector('#card')
var card = document.querySelector("#card-content")
// Activities
var studyBtn = document.querySelector('#study-box');
var meditateBtn = document.querySelector('#meditate-box');
var exerciseBtn = document.querySelector('#exercise-box');
var activityBtns = document.querySelectorAll('.box')
var logBTN = document.querySelector('#log-activity-btn');
var createNewBTN = document.querySelector('#new-activity-btn')
var newHeader = document.querySelector("#new")
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
// Warning
var error = document.getElementById('#warning')
var goalWarning = document.querySelector('#warning-1')
var minutesWarning = document.querySelector('#warning-2')
var secondsWarning = document.querySelector('#warning-3')
var activiesWarning = document.querySelector('#warning-4')
//timer
var timerBox = document.querySelector("#timer-box");
var createBox = document.querySelector("#create-box");
var timer = document.querySelector("#timer")
var timeLeft = document.querySelector("#time")
var ring = document.querySelector("#ring")
var startTimerBtn = document.querySelector('#start-timer-btn')
var activityHeader = document.querySelector('#userActivity')


// Event Listeners
studyBtn.addEventListener('click', activateStudy);
meditateBtn.addEventListener('click', activateMeditate);
exerciseBtn.addEventListener('click', activateExcercise);
// logBTN.addEventListener('click', complete)
// startActivityBtn.addEventListener('click', createActivity)
ring.addEventListener('click', triggerTimer)

// Event Handlers
// Buttons
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
  }
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
        start.textContent = `COMPLETE!`
        // I NEED A "log Activity" BTN that calls logActivity()
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


// function logActivity() {
//   activities.unshift(currentActivity)
//   localStorage.setItem('somethingComplicated', JSON.stringify(activities))
//   pastActivitiesSection()
//   hide(createBox)
//   show(card)
// }


// function pastActivitiesSection() {
//   var parsedObject = JSON.parse(localStorage.getItem('somethingComplicated'));
//   if (!parsedObject) {
//     pastContainer.innerHTML = `
//     <h2 id="past">Past Activities</h2>
//     <p>You haven't logged any activities today!</br>Complete the form to the left to get started!</p>
//     `
//   } else {
//     pastContainer.innerHTML = ``
//     for (var i = 0; i < parsedObject.length; i++) {
//       pastContainer.innerHTML += `
//       <h2 id="past">Past Activities</h2>
//       <p>
//       ${parsedObject[i].category}
//       ${parsedObject[i].minutes} MIN ${parsedObject[i].seconds} SECONDS
//       ${parsedObject[i].description}</p>
//       `
//     }
//   }
// }


// function newActivity() {
//   hide(completedcontainer)
//   show(newcontainer)
// }


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
  newHeader.innerText = "Current Activity"
}