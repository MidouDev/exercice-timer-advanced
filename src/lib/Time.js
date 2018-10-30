export default class Time{
    getTimeDisplay(currentTime){
        
        var hours = this.formatUnitOfTime(Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        var minutes = this.formatUnitOfTime(Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60)));
        var seconds = this.formatUnitOfTime(Math.floor((currentTime % (1000 * 60)) / 1000));
        var centiseconds = this.formatUnitOfTime(Math.floor((currentTime % (1000)) / 10));

        var result =  hours + ":" + minutes + ":" + seconds + ":" + centiseconds;

        return result;
    }

    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}`.substring(0,2) : unitOfTime.toString().substring(0,2);
    }
}