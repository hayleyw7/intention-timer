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

  }
  markComplete() {
    this.completed = true;
  }
  saveToStorage() {
    activities.push(currentActivity)
  }
}
