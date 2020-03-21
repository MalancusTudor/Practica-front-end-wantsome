// Exercise 1

var car = {
    name: "Tesla",
    wheels: 4
}

console.log(car);

car.name = "Mercedes";
console.log(car);

delete car.name;
console.log(car);

//Exercise 2

var firstObject = {
    firstKey: "firstValue",
    secondKey: "secondValue",
    thirdKey: "thirdValue",
    forthKey: "forthValue"
}
console.log(firstObject);

var objectKeys = Object.keys(firstObject);
console.log(objectKeys);

var cpitalizeKeys = objectKeys.map(function(element) {
    return element.toUpperCase();
});
console.log(cpitalizeKeys);

var objectValues = Object.values(firstObject);
console.log(objectValues);

var uncapitalizeValues = objectValues.map(function(element) {
    return element.toLowerCase();
})
console.log(uncapitalizeValues);

var result = objectKeys.join(" ") + " reprezinta ceva";
console.log(result);

//Exercise 3

var car = {
    name: "Mercedes",
    wheels: 4,
    getProperties: function() {
        return "Numele este: " + this.name + ". Numarul de roti este: " + this.wheels + ".";
    }
}

console.log(car.getProperties());

//Exercise 4 

var myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
}

var myRoom = {
    name: "bedroom",
    bed: 1,
    tv: 1
}
console.log(myRoom);

var variableObject = Object.assign({}, myRoom);
console.log(variableObject);

variableObject.walls = 4;
variableObject.floor = 1;
console.log(variableObject);

var mergedObject = Object.assign(myHouse, variableObject);
console.log(mergedObject);

//Exercise 5 

var house = {
    room: {
        bed: 1,
        walls: 4
    } 
}

var houseKeys = Object.keys(house);
console.log(houseKeys);

var roomKeys = Object.keys(house.room);
console.log(roomKeys);

var result = roomKeys.join(" si ") + " apartin obiectului " + houseKeys[0];
console.log(result);

//Exercise 6

var myObject = {
    name: "John",
    surname: "Applegate",
    sort: function() {
        var fullName = [this.name, this.surname];
        var result = fullName.sort().join(" ");
        return result;
    }
}

console.log(myObject.sort());

//Exercise 7 

function Car(name, numberOfWheels, color) {
    this.name = name.toUpperCase();
    this.numberOfWheels = numberOfWheels;
    this.color = color.toUpperCase();
}

var mercedes = new Car("Mercedes", 4, "Black");
var audi = new Car("Audi", 4, "Red");
var bmw = new Car("BMW", 4, "Blue");

console.log(mercedes);
console.log(audi);
console.log(bmw);