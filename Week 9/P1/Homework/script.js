// Exercise 1

let filter = function(array, callback) {
    let filteredArray = [];
    for (let i = 0; i < array.length; ++i) {
        let testedElement = array[i];
        if (callback(testedElement)) {
            filteredArray.push(testedElement);
        }
    }
    return filteredArray;
};

let randomArray = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5];

let positive = (element) => {
    return (element > 0) ? true : false;
}

let negative = (element) => {
    return (element < 0) ? true : false;
}

let odd = (element) => {
    return (element % 2 !== 0) ? true : false;
}

let even = (element) => {
    return (element % 2 === 0) ? true : false;
}

let dividedByThree = (element) => {
    return (element % 3 === 0) ? true : false;
}

console.log(filter(randomArray, positive));
console.log(filter(randomArray, negative));
console.log(filter(randomArray, odd));
console.log(filter(randomArray, even));
console.log(filter(randomArray, dividedByThree));

//Exercise 2

let multipleCallbacks = (object, succes, error) => {
    let result = '';
    if(object.status === 'succes') {
        result = succes();
    } else if(object.status === 'error') {
        result = error();
    } else {
        return 'Invalid object!!!';
    }
    return result;
}

function statusObject(status) {
    this.status = status;
}

let handleSucces = () => {
    return 'Succes';
}

let handleError = () => {
    return 'Error';
}

let succesObject = new statusObject('succes');
let errorObject = new statusObject('error');

console.log(multipleCallbacks(succesObject, handleSucces, handleError));
console.log(multipleCallbacks(errorObject, handleSucces, handleError));