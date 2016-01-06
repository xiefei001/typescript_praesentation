// Array
var list:Array<number> = [1, 2, 3];
var list:number[] = [1, 2, 3];
console.log("list ist eine Instanz von Array" + (list instanceof Array));
console.log("type von list: " + typeof(list));

// Objekt Definieren über Literal
var obj = {vorname: "Max", nachname: "Muster"};
console.log(obj["vorname"]);
// Objekct Definieren über Klassen
class Person {
    vorname:string;
    nachname: string;
}
var p = new Person();
p.vorname = "Max";
p.nachname = "Muster";


// tuple
console.log("--- Demo Tupel type ---");
var t:[number, string] = [3, "three"];
console.log("t[0] = " + t[0]);
console.log("t[1] = " + t[1]);


// Union Type
console.log("--- Demo union type ---");
var union:string | number = "string value";
console.log(typeof union);
union = 20;
console.log(typeof union);
