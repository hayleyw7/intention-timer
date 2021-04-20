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
    timer = new CountDownTimer(this.minutes, this.seconds);
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
  markComplete() {
    this.completed = true;
  }
  saveToStorage() {
    activities.push(currentActivity)
    localStorage.setItem('Activities', JSON.stringify(activities))
    createActivityCard()
  }
}