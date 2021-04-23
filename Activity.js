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
    // assigns timer an instance of CountDownTimer passing in minutes and seconds
    timer = new CountDownTimer(this.minutes, this.seconds);
    // calls onTick function of timer passing in format fn, onTick restart(), and start()
    timer.onTick(format(timeLeft)).onTick(restart).start();
    function restart() {
      // if the timer cas expired (if this.running = false [line 58 of timer.js]) call markComplete method
      // update DOM with log activity button
      // change timer innerText to COMPLETE
      // return alert
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
        // assign minutes to minutes if it's double digits, or add leading 0 if it's single digit
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        //update DOM with countdown of minutes & seconds
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