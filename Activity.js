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
    beginTimer(this.minutes, this.seconds);
  }
  markComplete() {
    this.completed = true;
  }
  saveToStorage() {
console.log(currentActivity)
    activities.push(currentActivity)
console.log(activities)
    localStorage.setItem('Activities', JSON.stringify(activities))
    createActivityCard()
  }
}