function Person1(age) {
    this.age = age
    this.growOld = function(){
        console.log("this ist hier: " + this);
        this.age++;
    }
}
var person1 = new Person1(1);
//person2.growOld();
setTimeout(person1.growOld,1000);

setTimeout(function(){ console.log(person1.age); },2000); // 1, should have been 2


function Person2(age) {
    this.age = age
    this.growOld = () => {
        this.age++;
    }
}
var person2 = new Person2(1);
setTimeout(person2.growOld,1000);

setTimeout(function(){ console.log(person2.age); },2000); // 2