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
    beginCountdown(this.minutes, this.seconds);
  }
  markComplete() {
    this.completed = true;
  }
  saveToStorage() {
    activities.push(currentActivity)
    // updates DOM
    // updates right side with our newly saved activity (for loop)
    updatePastActivitiesSection()
    // adds and removes a hidden class in the HTML
    showCompletedActivitiesSection()
  }
}
