var currentActivity;

var studyImage = document.querySelector('#study-box');
studyImage.addEventListener('click', makeStudyImageChange);
var meditateImage = document.querySelector('#meditate-box');
meditateImage.addEventListener('click', makeMeditateImageChange);
var exerciseImage = document.querySelector('#exercise-box');
exerciseImage.addEventListener('click', makeExerciseImageChange);
function makeStudyImageChange() {
    studyImage.innerHTML = `<img src="assets/study-active.svg"/><h3>Study</h3>`
  }
  function makeMeditateImageChange() {
    meditateImage.innerHTML = `<img src="assets/meditate-active.svg"/><h3>Meditate</h3>`
  }
  function makeExerciseImageChange() {
    exerciseImage.innerHTML = `<img src="assets/exercise-active.svg"/><h3>Exercise</h3>`
  }

  function generateRandomID() {
    return Math.floor((1 + Math.random()) * 0x100000)
  }
  function createActivity(form) {
    currentActivity = new Activity(form.category.value, form.goal.value, form.minutes.value, form.seconds.value, generateRandomID());
    // currentActivity = new Activity(form.goal.value, form.minutes.value, form.seconds.value, generateRandomID());
    // displayCountdown();
  }