class AlarmClock{

    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock (startTime, callback, id) {
        if (typeof id == undefined){
            throw new Error('id не передан')
        } else if (this.alarmCollection.find(item => item.id === id)){
            return (console.error('Уже существует звонок с таким id '))
        } else {return ( this.alarmCollection.push({id: this.id, time: this.startTime, callback: this.callback}))}
    }

    removeClock (id) {
        let inputArrLength = this.alarmCollection.length;
        this.alarmCollection.filter(item => item.id !== id)
        let outputArrLength = this.alarmCollection.length;
        return outputArrLength < inputArrLength;
    }

    getCurrentFormattedTime () {
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

    start () {
        function checkClock (clock) {
            if (clock.time === getCurrentFormattedTime()){
                return clock.callback;
            }
        }
    }

    stop () {
        if (this.timerId !== null){
            clearInterval(this.timerId);
            return this.timerId = null;
        }
    }

    printAlarms (){
        this.alarmCollection.forEach(console.log(this.alarmCollection.id, this.alarmCollection.time))
    }

    clearAlarms (){
        this.stop();
        this.alarmCollection = [];
    }



}