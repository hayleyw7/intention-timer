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
    localStorage.setItem('Activities', JSON.stringify(activities))
    newFunction()
  }
}