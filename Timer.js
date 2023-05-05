function startTimer(duration, callback) {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
  
    const intervalId = setInterval(() => {
      const timeLeft = Math.round((endTime - Date.now()) / 1000);
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        callback();
      } else {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        console.log(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);
  }
  
  startTimer(60, () => {
    console.log('Timer is up!');
  });
  