var x; // Identisch wie var x:any;
var x:any;

enum Color {red = 1, green, blue}

console.log(typeof Color.red);
console.log(typeof Color);

var ar:Array<number> = [];
console.log(ar instanceof Array);
console.log(Color instanceof Function);


var c:Color = 2;
console.log(c == Color.green);

var obj:Object = {vorname: "fei", nachname: "xie"};
obj[0] = "fei";
console.log(obj["vorname"]);
console.log(obj[0]);


class Person {

}

var p:Person = new Person();
console.log(new Person() instanceof Person);