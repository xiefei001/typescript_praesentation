class Animal {
    name: string;
    constructor(name:string) {
    }
    output() {
        console.log("The name of this animal: " + this.name);
    }
}

class Horse extends Animal {
    constructor() {
        super("Horse");
    }
}

var horse = new Horse();
horse.output();


interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
//square.unknown= "dfsdf"; // Error: Property 'unknown' doesn't exist on type 'Square'.

