// all the query selectors and eventListeners

// for changing the icon colors - injecting innerHTML
var studyImage = document.querySelector('#study-box');
studyImage.addEventListener('click', makeStudyImageChange);
var meditateImage = document.querySelector('#meditate-box');
meditateImage.addEventListener('click', makeMeditateImageChange);
var exerciseImage = document.querySelector('#exercise-box');
exerciseImage.addEventListener('click', makeExerciseImageChange);

// for showing the errors if no value is entered - are you all going to need these to innerHTML?
var descriptionErrorSection = document.querySelector('');
descriptionErrorSection.addEventListener('click', functionName);
var timeErrorSection = document.querySelector('');
timeErrorSection.addEventListener('click', functionName);

var activitiesSection = document.querySelector('#new-container');

activitiesSection.addEventListener('click', filterEventBubbles);

var timer = document.querySelector('#timer');

// I need an element below the h2... that encapsulates the <p>
var pastActivitiesSection = document.querySelector('#');

var startNewActivityButton = document.querySelector('');
startNewActivityButton.addEventListener('click', startNewActivity);

var newActivityButton = document.querySelector('#new-activity-button');
newActivityButton.addEventListener('click', showActivitiesSection);


// global variables
var currentActivity;

// PART 1 Create Activity --> Show Start

function makeStudyImageChange() {
  studyImage.innerHTML = `<img src="assets/study-active.svg"/><h3>Study</h3>`
}
function makeMeditateImageChange() {
  meditateImage.innerHTML = `<img src="assets/meditate-active.svg"/><h3>Study</h3>`
}
function makeExerciseImageChange() {
  exerciseImage.innerHTML = `<img src="assets/exercise-active.svg"/><h3>Study</h3>`
}

// create a random id number for the instance of Activity class below it
function generateRandomID() {
  return Math.floor((1 + Math.random()) * 0x100000)
}

// update Data Model
// when start activity button is clicked currentactivity variable is assigned a new instance of the Activity class
// and displayCountdown() is called
function createActivity() {
  // var id = generateRandomID()
  currentActivity = new Activity(category.value, description.value, minutes.value, seconds.value, generateRandomID());
  displayCountdown();
}

// Update DOM
// injects dynamic html à la https://frontend.turing.io/projects/module-1/assets/intention-timer/timer-start-desktop.png
function displayCountdown() {
  activitiesSection.innerHTML = `
  ${currentActivity.description}
  ${currentActivity.minutes}:${currentActivity.seconds}
  // start button with id="startBTN"
  `
}

// assigns specific events on the same parent to specific functions
function filterEventBubbles() {
  if (e.target.id === "startBTN") {
    currentActivity.startTimer()
  } else if (e.target.id === "logBTN") {
    currentActivity.saveToStorage()
  }
}

//https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function beginTimer(minutes, seconds) {
  var duration = minutes * 60 + seconds;
  var start = Date.now(),
      diff,
      minutes,
      seconds;
  function timer() {
      diff = duration - (((Date.now() - start) / 1000) | 0);
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      timeLeft.textContent = minutes + ":" + seconds; 

      if (diff <= 0) {
          // add one second so that the count down starts at the full duration
          // example 05:00 not 04:59
          start = Date.now() + 1000;
      }
  };
  // we don't want to wait a full second before the timer starts
  timer();
  setInterval(timer, 1000);
}

// Update DOM
// injects dynamic html à la https://frontend.turing.io/projects/module-1/assets/intention-timer/complete-timer-desktop.png
function showCongrats() {
  activitiesSection.innerHTML = `
  ${currentActivity.description}
  00:00
  COMPLETE!
  // log activity button with id="logBTN"
  `
}

// local storage!!
function updatePastActivitiesSection() {
  for (var i = 0; i < activities.length; i++) {
    pastActivitiesSection.innerHTML += `
    ${activities[i].category}
    ${activities[i].minutes} MIN ${activities[i].seconds} SECONDS
    ${activities[i].description}
    `
}

function showCompletedActivitiesSection() {
  activitiesSection.classList.add("hidden");
  completedActivitiesSection.classList.remove("hidden");
}

function showActivitiesSection() {
  activitiesSection.classList.remove("hidden");
  completedActivitiesSection.classList.add("hidden");
}
