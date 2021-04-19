// Activities
var studyBtn = document.querySelector('#studyBox');
var meditateBtn = document.querySelector('#meditateBox');
var exerciseBtn = document.querySelector('#exerciseBox');

// On & off buttons 
var sOn = document.querySelector('#sOn')
var sOff = document.querySelector('#sOff')
var mOn = document.querySelector('#mOn')
var mOff = document.querySelector('#mOff')
var eOn = document.querySelector('#eOn')
var eOff = document.querySelector('#eOff')

// Forms
var hiddenInput = document.querySelector('#hiddenInput')
var studyBtn = document.querySelector('#studyBtn')
var meditateBtn = document.querySelector('#meditateBtn')
var exerciseBtn = document.querySelector('#exerciseBtn')
var startActivityBtn = document.querySelector('#startBtn')
var logActivityBtn = document.querySelector('#logBtn')
var createNewActivityBtn = document.querySelector('#createNewActivityBtn')

// Outer Card
var card = document.querySelector('#cardContent')
var activityHeader = document.querySelector('#new')

// Timer Card 
var timerCard = document.querySelector('#timerCard');
var timer = document.querySelector('#timer')
var timeLeft = document.querySelector('#time')
var ring = document.querySelector('#ring')
var activityHeader = document.querySelector('#userActivity')

// Activity Log
var pastActivitiesCard = document.querySelector('#pastActivitiesCard')
var pastActivitiesDefault = document.querySelector('#pastActivitiesDefault')

// Warnings
var catagoryWarning = document.querySelector('#warning0')
var goalWarning = document.querySelector('#warning1')
var minutesWarning = document.querySelector('#warning2')
var secondsWarning = document.querySelector('#warning3')

// Event Listeners 
window.addEventListener('load', createActivityCard)
studyBtn.addEventListener('click', activateStudy);
meditateBtn.addEventListener('click', activateMeditate);
exerciseBtn.addEventListener('click', activateExcercise);
ring.addEventListener('click', triggerTimer)


// Event Handlers
function activateStudy() {
  hiddenInput.innerHTML = `<input type='hidden' name='category' value='Study'>`
  studyBtn.style.borderColor = ('var(--study)')
  ring.style.borderColor = ('var(--study)')
  studyLabel.style.color = ('var(--study)')
  exerciseBtn.style.borderColor = ('var(--white)')
  meditateBtn.style.borderColor = ('var(--white)')
  meditateLabel.style.color = ('var(--white)')
  exerciseLabel.style.color = ('var(--white)')
  show(sOn)
  show(mOff)
  show(eOff)
  hide(sOff)
  hide(mOn)
  hide(eOn)
}

function activateMeditate() {
  hiddenInput.innerHTML = `<input type='hidden' name='category' value='Meditate'>`
  meditateBtn.style.borderColor = ('var(--meditate)')
  ring.style.borderColor = ('var(--meditate)')
  meditateLabel.style.color= ('var(--meditate')
  exerciseBtn.style.borderColor = ('var(--white)')
  studyBtn.style.borderColor = ('var(--white)')
  studyLabel.style.color = ('var(--white)')
  exerciseLabel.style.color = ('var(--white)')
  hide(mOff)
  hide(eOn)
  hide(sOn)
  show(mOn)
  show(eOff)
  show(sOff)
}

function activateExcercise() {
  hiddenInput.innerHTML = `<input type='hidden' name='category' value='Exercise'>`
  exerciseBtn.style.borderColor = ('var(--exercise)')
  ring.style.borderColor = ('var(--exercise)')
  exerciseLabel.style.color= ('var(--exercise')
  exerciseBtn.style.color = ('var(--exercise)')
  meditateBtn.style.borderColor = ('var(--white)')
  studyBtn.style.borderColor = ('var(--white)')
  studyLabel.style.color = ('var(--white)')
  meditateLabel.style.color = ('var(--white)')
  show(eOn)
  show(mOff)
  show(sOff)
  hide(eOff)
  hide(mOn)
  hide(sOn)
}

function createActivity(form) {
  !hiddenInput.innerHTML ? displayWarning(catagoryWarning) : hide(catagoryWarning)
  form.goal.value === '' ? displayWarning(goalWarning) : hide(goalWarning)
  !form.minutes.value ? displayWarning(minutesWarning) : hide(minutesWarning)
  !form.seconds.value ? displayWarning(secondsWarning) : hide(secondsWarning)
  if(form.goal.value && form.minutes.value && form.seconds.value) {
    currentActivity = new Activity(form.category.value, form.goal.value, parseInt(form.minutes.value), parseInt(form.seconds.value), generateRandomID());
    showTimer()
    show(timerCard)
    hide(card)
    hide(logActivityBtn)
  }
}

function displayWarning(warning) {
  resetFade(warning)
  show(warning)
  animateFade(warning)
}

function showTimer() {
  var minutes = currentActivity.minutes < 10 ? '0' + currentActivity.minutes : currentActivity.minutes;
  var seconds = currentActivity.seconds < 10 ? '0' + currentActivity.seconds : currentActivity.seconds;
  activityHeader.textContent = `${currentActivity.description}`
  timeLeft.textContent = minutes + ':' + seconds;
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
        return alert('Congrats! You made it!');
      }, 1000);
    }
  }
  function format(timeLeft) {
    return function (minutes, seconds) {
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      timeLeft.textContent = minutes + ':' + seconds;
    };
  }
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
  return activities
}

function makeNewActivity() {
  hide(createNewActivityBtn)
  show(card)
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
  e.classList.remove('fade')
  void e.offsetWidth;
}

function updateHeader() {
  activityHeader.innerText = 'Current Activity'
}

function triggerTimer() {
  beginTimer(currentActivity.minutes, currentActivity.seconds)
}

function changeCategoryColor(category) {
var color = ''
category === 'Study' ? color = 'green' 
: category === 'Meditate' ? color = 'purple' 
: category === 'Exercise' ? color = 'red' 
: color='var(--white)'
return color
}