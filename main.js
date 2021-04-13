// all the query selectors and eventListeners

var descriptionErrorSection = document.querySelector('');

var timeErrorSection = document.querySelector('');

var startActivityButton = document.querySelector('.start-btn');
startActivityButton.addEventListener('click', createActivity);

var activitiesSection = document.querySelector('#new-container');
var pastActivitiesSection = document.querySelector('#');
// I need an element below the h2... that encapsulates the <p>

var startCircle = document.querySelector('');
startCircle.addEventListener('click', startCountdown);

var logActivityButton = document.querySelector('');
logActivityButton.addEventListener('click', logActivity);

var startNewActivityButton = document.querySelector('');
startNewActivityButton.addEventListener('click', startNewActivity);

// global variables

var currentActivity;
var activities = [];

// PART 1 Create Activity --> Show Start

function generateRandomID() {
  var id = Math.floor((1 + Math.random()) * 0x100000)
  return id
}

// update Data Model
function createActivity() {
  // var id = generateRandomID()
  currentActivity = new Cover(category.value, description.value, minutes.value, seconds.value, generateRandomID());
  displayCountdown();
}

// Update DOM
function displayCountdown() {
  activitiesSection.innerHTML = ``
}

// startTimer method in class

//saveToStorage method in class

function startNewActivity() {
  activitiesSection.innerHTML = ``
  updatePastActivitiesSection()
}

function updatePastActivitiesSection() {
  for (var i = 0; i < activities.length; i++) {
    pastActivitiesSection.innerHTML += `
    ${activities[i].category}
    ${activities[i].minutes} MIN ${activities[i].seconds} SECONDS
    ${activities[i].description}
    `
}
