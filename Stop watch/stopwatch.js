function StopWatch() {
    let running , startTime, endTime, duration = 0;

    this.start = function (){
        if (running)
            throw new Error("watch is already started.");

        startTime = new Date();
        running = true;
    }
    
    this.stop = function(){
        if (!running)
            throw new Error("watch is already stopped.");

        endTime = new Date();
        running = false;
        
        seconds =  Math.floor((endTime.getTime() - startTime.getTime())/ 1000);
        duration += seconds;
    }

    this.reset = function(){
        running = false;
        duration = 0;
        startTime = null;
        endTime = null;
    }

    Object.defineProperty(this, 'duration',{
        get: function () {
            return duration;
        }
    });
};





let sw = new StopWatch();
console.log(sw.duration);

