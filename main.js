var currentActivity;

var studyImage = document.querySelector('#study-box');
studyImage.addEventListener('click', makeStudyImageChange);
var meditateImage = document.querySelector('#meditate-box');
meditateImage.addEventListener('click', makeMeditateImageChange);
var exerciseImage = document.querySelector('#exercise-box');
exerciseImage.addEventListener('click', makeExerciseImageChange);
function makeStudyImageChange() {
    studyImage.innerHTML = `<input type="hidden" name="category" value="Study"><img src="assets/study-active.svg"/><h3>Study</h3></input>`
  }
  function makeMeditateImageChange() {
    meditateImage.innerHTML = `<input type="hidden" name="category" value="Meditate"><img src="assets/meditate-active.svg"/><h3>Meditate</h3></input>`
  }
  function makeExerciseImageChange() {
    exerciseImage.innerHTML = `<input type="hidden" name="category" value="Exercise"><img src="assets/exercise-active.svg"/><h3>Exercise</h3></input>`
  }



  function generateRandomID() {
    return Math.floor((1 + Math.random()) * 0x100000)
  }
  function createActivity(form) {
    currentActivity = new Activity(form.category.value, form.goal.value, form.minutes.value, form.seconds.value, generateRandomID());
    displayCountdown();
  }



  function displayCountdown() {
    activitiesSection.innerHTML = `
    ${currentActivity.description}
    ${currentActivity.minutes}:${currentActivity.seconds}
    // start button with id="startBTN"
    `
  }