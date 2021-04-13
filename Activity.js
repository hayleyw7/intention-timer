class Activity {
  constructor(category, description, minutes, seconds, id) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = id;
  }
  startTimer() {
    // cause time to countdown
    // remove START text within circle
    // markComplete() (updates data model)
    // alert when done
    // congratulations screen with log activity button appears after alert goes away
    //^I'm guessing call a function AFTER a certain amount of time (updates DOM)
    //^^I have a showCongrats() in the js to inject the html for this
  }
  // updates data model
  markComplete() {
    this.completed = true;
  }
  // updates data model
  saveToStorage() {
    activities.push(currentActivity)
    // updates DOM
    // updates right side with our newly saved activity (for loop)
    updatePastActivitiesSection()
    // adds and removes a hidden class in the HTML
    showCompletedActivitiesSection()
  }
}
