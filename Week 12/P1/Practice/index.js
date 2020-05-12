// Exercise 1
// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.
  
var Vehicle = function(driver, nameOfVehicle) {
    this.driver = driver;
    this.nameOfVehicle = nameOfVehicle
    this.speed = 0;
    this.drive = function(mph) {
        this.speed = mph;
        return this.driver + ' driving at ' + mph + ' miles per hour';
    };
};

var Car = new Vehicle('Tudor', 'Car');

var Truck = new Vehicle('Alexandra', 'Truck');

Truck.cargo = [];
Truck.loadCargo = function(cargo) {
    this.cargo.push(cargo);
    return this;
};
Truck.unloadCargo = function() {
    return this.cargo.pop();
};

console.log(Car);
console.log(Truck);

// Exercise 2

var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

let Trainer = function () {
    this.teach = function () {
        console.log(`${this.name} is teaching javascript`);
    }
}

Trainer.prototype = new Person();
let ovidiu = new Trainer();
ovidiu.initialize('ovidiu', 22);
ovidiu.teach();
console.log(ovidiu);

//Exercise 3

// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

let triunghi = new Triangle(12, 16, 20);
console.log(triunghi.constructor);

triunghi.getPerimeter = () => {
    return this.a + this.b + this.c;
}
console.log(triunghi.getPerimeter());

triunghi.type = 'triunghi';
triunghi.getType = () => {
    return this.type;
}
console.log(triunghi.getType());