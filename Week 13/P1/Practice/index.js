// Exercise 1

const promiseForCompareWith10 = (inputNumber) => {
    return new Promise((resolve, reject) => {
        if(inputNumber > 10){
            resolve(inputNumber);
        } else {
            reject(inputNumber);
        }
    });
}

promiseForCompareWith10(20).then((result) => {
    console.log(`Numarul ${result} este mai mare decat 10.`);
}).catch((error) => {
    console.log(`Numarul ${error} este mai mic decat 10.`);
});

promiseForCompareWith10(5).then((result) => {
    console.log(`Numarul ${result} este mai mare decat 10.`);
}).catch((error) => {
    console.log(`Numarul ${error} este mai mic decat 10.`);
});

// Exercise 2

const promiseForString = (inputString) => {
    return new Promise((resolve, reject) => {
        if(inputString.includes('promise')) {
            resolve(inputString);
        } else {
            reject(inputString);
        }
    });
}

promiseForString('promise exists').then((result) => {
    console.log('Cuvantul promise exista in string.');
}).catch(() => {
    console.log('Cuvantul promise NU exista in string!!!')
});

promiseForString('Ana are mere').then((result) => {
    console.log('Cuvantul promise exista in string.');
}).catch(() => {
    console.log('Cuvantul promise NU exista in string!!!')
});

// Exercise 4

const capitalizeWords = (inputArray) => {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < inputArray.length; ++i) {
            if(typeof(inputArray[i]) !=='string') {
                reject(inputArray);
                break;
            }
        }
    });
}