class A {
    constructor(private n:number, private m:number) {
        console.log("Konstruktur aufgerufen mit number: " + n + ", " + m);
    }

    public add():number {
        console.log("func()");
        return this.n + this.m;
    }

    protected static dis():void {
        console.log(typeof this);
        console.log(new this(12, 23));
    }
}

//A.dis();

class B extends A {
    constructor(n:number, m:number) {
        super(n, m);
    }

    public add():number {
        //dis();  // Error dis() ist eine statische Methode.
        return super.add();
    }

    public static display() {
        super.dis();
    }
}

var b:B = new B(2, 3);
b.add();


