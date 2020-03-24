// Exercise 1

function iterationFor(number) {
    for(var i = 0; i< number; ++i) {
        console.log("Sunt la iteratia numarul " + i);
    }
}

iterationFor(5);

function iterationWhile(number) {
    var i = 0;
    while(i < number) {
        console.log("Sunt la iteratia numarul " + i);
        i += 1;
    }
}

iterationWhile(5);

// Exercise 2

function arrayElementsFor(array) {
    for(var i = 0; i < array.length; ++i) {
        console.log(array[i]);
    }
}

arrayElementsFor([0, 1, 2, 3, 4, 5]);

function arrayElementsWhile(array) {
    var i = 0;
    while(i < array.length) {
        console.log(array[i]);
        i += 1;
    }
}

arrayElementsWhile([0, 1, 2, 3, 4, 5]);

// Exercise 3

function objectProprietesFor(object) {
    for (var element in object) {
        console.log(element);
    }
}

objectProprietesFor({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
});

function objectProprietesWhile(object) {
    var length = Object.keys(object).length;
    var i = 0;
    while(i < length) {
        console.log(Object.keys(object)[i]);
        i += 1;
    }
}

objectProprietesWhile({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
});

// Exercise 4

function while1() {
    var i = 0;
    while(i <= 1000) {
        console.log(i);
        i += 100;
    }
}

while1();

// Exercise 5

function while2() {
    var i = 1;
    while(i <= 128) {
        console.log(i);
        i *= 2;
    }
}

while2();

// Exercise 6

function while3() {
    var i = 0;
    while(i <= 10) {
        console.log(i);
        i += 2;
    }
}

while3();

// Exercise 7

function while4() {
    var i = 3;
    while(i <= 15) {
        console.log(i);
        i += 3;
    }
}

while4();

// Exercise 8

function while5() {
    var i = 9;
    while(i >= 0) {
        console.log(i);
        i -= 1;
    }
}

while5();

// Exercise 9

function while6() {
    var i = 1;
    while(i <= 4) {
        var j = 0;
        while(j < 3) {
            console.log(i);
            j += 1;
        }
        i += 1;
    }
}

while6();

// Exercise 10

function while7() {
    var i = 0;
    while(i < 3){
        var j = 0;
        while(j < 5) {
            console.log(j);
            j += 1;
        }
        i += 1;
    }
}

while7();

// Exercise 11
var counter = 10;
var conditionalFn = function() {
    counter--;
    return counter >= 0;
}

var actionFn = function() {
    console.log("Vreau sa ies la tabla!");
}

function stream(conditionalFn, actionFn) {
    while(conditionalFn() !== false) {
        actionFn();
    }
}

stream(conditionalFn, actionFn);

// Exercise 12

function computeSumOfArrayElements(array) {
    var i = 0;
    var sum = 0;
    while(i < array.length) {
        sum += array[i];
        i += 1;
    }
    return sum;
}

console.log(computeSumOfArrayElements([1, 2, 3, 4]));