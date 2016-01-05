var x; // Identisch wie var x:any;
var x;
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
console.log(typeof Color.red);
console.log(typeof Color);
var ar = [];
console.log(ar instanceof Array);
console.log(Color instanceof Function);
var c = 2;
console.log(c == Color.green);
var obj = { vorname: "fei", nachname: "xie" };
obj[0] = "fei";
console.log(obj["vorname"]);
console.log(obj[0]);
var Person = (function () {
    function Person() {
    }
    return Person;
})();
var p = new Person();
console.log(new Person() instanceof Person);
