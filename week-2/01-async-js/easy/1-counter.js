class CountdownTimer {
    constructor(initialCount, interval) {
        this.counter = initialCount;
        this.interval = interval;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => this.displayCounter(), this.interval);
    }

    displayCounter() {
        console.clear();
        console.log(this.counter);
        this.counter++;

        if (this.counter < 0) {
            this.stop();
        }
    }

    stop() {
        clearInterval(this.intervalId);
        console.log("Countdown completed!");
    }
}

// Usage
const countdownTimer = new CountdownTimer(0, 1000);
countdownTimer.start();