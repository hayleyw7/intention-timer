function CountDownTimer(minutes, seconds) {
  var duration = minutes * 60 + seconds;
  this.duration = duration;
  this.granularity = 1000;
  this.tickFtns = [];
  this.running = false;
}
  
CountDownTimer.prototype.start = function() {
  // if running = true break out of fn
  if (this.running) {
    return;
  }
  // otherwise change running to true
  this.running = true;
  // assign start variable to Date/Time now
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    // assign diff to durration of timer (user imputed, converted to total number of seconds)
    // minus the difference between new Datenow and start Datenow
    //divided by 1000ms
    //if there is no difference make it 0
    //this is the meat and potatoes of the timer
    diff = that.duration - (((Date.now() - start) / 1000) | 0);
    
    // if difference is greater than 0 seconds call setTimeout function
    // passing timer (instantiation of CountDownTimer) and granularity (1000ms refresh)
    //otherwise assign diff 0 and make running = false
    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};
  
CountDownTimer.prototype.onTick = function(ftn) {
// ftn = format(timeLeft) (line25 of Activity.js)
  if (typeof ftn === 'function') {
    // tickFtns = restart() (line 15 of Activity.js)
    // push makes tickFtns an array of the two functions above
    this.tickFtns.push(ftn);
  }
  // this = CountDownTimer class
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};