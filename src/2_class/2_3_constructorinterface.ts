interface ClockInterface {
    new (hour:number, minute:number);
}

/*
class Clock implements ClockInterface  { // Error: Class 'Clock' incorrectly implements interface 'ClockInterface'.
    currentTime: Date;
    constructor(h: number, m: number) { }
}
*/




/* -------- Lösung ------ */
interface ClockStatic {
    new (hour:number, minute:number);
}


class Clock  {
    currentTime: Date;
    constructor(hour: number, minute: number) { }
}

var cs: ClockStatic = Clock;
var newClock = new cs(7, 30);
