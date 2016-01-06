console.log("--- Demo any type ---");
var num:number = 20.2; // compile time: number; runtime: number
console.log("Laufzeit Type num_1:" + typeof num);

var num_1 = 20.2; // compile time: number; runtime: number
console.log("num.toFixed(2) = '" + num_1.toFixed(2) + "'");

// Any Type
console.log("--- Demo any type ---");
var n_any; // compile time: any; runtime: undefined
console.log("Type von n_any: '" + typeof n_any + "'");


// void Type
console.log("--- Demo void type ---");
var v:void;
console.log("Wert von v: " + v);
v = null;  // OK
console.log("Wert von v: " + v);
v = undefined; // OK
console.log("Wert von v: " + v);
//v = 20; // Error: Type 'number' is not assignable to type‘void'

// null und undefined
console.log("--- Demo null und undefined type ---");
var x = null;
if (x == undefined) {
    console.log("null ist gleich undefined");
}
if (x === undefined) {
    console.log("null ist strikt gleich undefined");
}
console.log("Type von x mit wert null: " + typeof(x)); // x hat Type von object???


/*
 * enum
 */
console.log("--- Demo enum type ---");
enum Color {red, green, blue} //enum Color {red = 1, green, blue}
console.log("type von Color: " + typeof(Color));
console.log("type von Color[1]: " + typeof(Color[1]));
console.log("type von Color['red']: " + typeof(Color['red']));
console.log(Color instanceof Function);

var col;
var xdf = col || (col={});
console.log(xdf == col);