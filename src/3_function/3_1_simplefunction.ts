// Funktion Deklaration
/*
 if (true){
 function func(x : number, y : number) : number {return x + y}
 } else {
 function func(x : number, y : number) : number {return x - y}
 }
 console.log("Ergebnis func(2,3): " + func(2, 3));
 */
// Funktion expression

var func;
if (true) {
    func = (x:number, y:number) => x + y;
} else {
    func = (x:number, y:number) => x - y;
}

console.log("Ergebnis func(2,3): " + func(2, 3));

