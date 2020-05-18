// Exercise 1

const moveLetters = (string) => {
    return string.split('').map(letter => {
        return String.fromCharCode(letter.charCodeAt(0) + 1);
    }).join('');
};

console.log(moveLetters('abcxy'));

// Exercise 2

const changeWordCase = (string) => {
    let words = string.split(' ');
    words.filter((word, i, sourceArray) => {
        if(i % 2 === 0) {
            sourceArray[i] = sourceArray[i].toUpperCase();
        }
    });
    return words.join(' ');
};

console.log(changeWordCase('hey ppl, lets learn javascript together'));

// Exercise 3

const arr = [
    {name: 'sasha', sex: 'f', age: 7, species: 'cat'},
    {name: 'john', sex: 'm', age: 133, species: 'human'},
    {name: 'titus', sex: 'm', age: 62, species: 'human'},
    {name: 'kalifa', sex: 'f', age: 255, species: 'human'},
    {name: 'oreo', sex: 'm', age: 21, species: 'cat'},
];

let allCats = (arr) => {
    return arr.filter(item => item.species === 'cat');
};

console.log(allCats(arr));

let allHumans = (arr) => {
    return arr.filter(item => item.species === 'human');
};

console.log(allHumans(arr));

let allFemales = (arr) => {
    return arr.filter(item => item.sex === 'f');
};

console.log(allFemales(arr));

let totalOfAllAges = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
};

console.log(totalOfAllAges(arr));

let averageAgeOfCats = (arr) => {
    return arr.filter(item => item.species === 'cat').reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / arr.filter(item => item.species === 'cat').length;
};

console.log(averageAgeOfCats(arr));

let averageAgeOfHumans = (arr) => {
    return arr.filter(item => item.species === 'human').reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / arr.filter(item => item.species === 'human').length;
};

console.log(averageAgeOfHumans(arr));

let avgLengthOfNames = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue.name.length, 0) / arr.length;
};

console.log(avgLengthOfNames(arr));

// Exercise 4

const double = (number) => {
    return number * 2;
};

const square = (number) => {
    return number * number;
};

const composedValue = (func1, func2, value) => {
    return func1(func2(value));
};

console.log(composedValue(square, double, 5));

// Exercise 5

const compose = (...func) => number => func.reduce((value, funct) => funct(value), number);

const myFunc = compose(double, square);
console.log(myFunc(10));

// Exercise 6

const isOdd = (number) => {
    return number % 2 === 1 ? number : false;
}

const find = (array, testFunc) => {
    return array.filter(number => testFunc(number) !== false);
}

console.log(find([1,2,3,4,5], isOdd));