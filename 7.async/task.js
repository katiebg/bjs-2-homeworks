class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(startTime, callback, id) {
        if (!id) {
            throw new Error('id не передан')
        } else if (this.alarmCollection.find(item => item.id === id)) {
            return (console.error('Уже существует звонок с таким id '))
        } else {
            this.alarmCollection.push({ id: id, time: startTime, callback: callback });
        }
    }

    removeClock(id) {
        let inputArrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id)
        let outputArrLength = this.alarmCollection.length;
        return outputArrLength < inputArrLength;
    }

    getCurrentFormattedTime() {
        let zeroAdd = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        let actualTime = new Date();
        let minutes = zeroAdd(actualTime.getMinutes());
        let hours = zeroAdd(actualTime.getHours());
        return hours + ':' + minutes;

    }

   /* start() {
        let checkClock = (clock) => {
            if (clock.time === getCurrentFormattedTime()) {
                clock.callback;
            };
        }
        if (!this.timerId) {
            this.alarmCollection.forEach ((item) => checkClock(item));
        }
    }*/

    start () {
        let checkClock = (clock) => {
            if (clock.time === getCurrentFormattedTime()) {
                clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        return this.alarmCollection.forEach((item) => (item.id, item.time))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase () {
    let PhoneClock = new AlarmClock();
    PhoneClock.addClock("17:36", () => console.log("Get up!"), 1);
    PhoneClock.addClock("17:37", () => console.log("Подъем!"), 2 );
    PhoneClock.removeClock(2);
    PhoneClock.addClock("17:38", () => console.log("Вставай!"), 3);
    PhoneClock.start();
    PhoneClock.stop();
    PhoneClock.printAlarms();
    PhoneClock.clearAlarms();
}


