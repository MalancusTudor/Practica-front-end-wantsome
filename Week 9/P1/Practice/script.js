// const func1 = () => {
//     setTimeout(() => {
//         console.log('1');
//     }, 3);
// }

// const func2 = () => {
//     setTimeout(() => {
//         console.log('2');
//     }, 2);
// }

// const func3 = () => {
//     console.log('3');
// }

// const func4 = () => {
//     setTimeout(() => {
//         console.log('4');
//     }, 4);
// }

// const func5 = () => {
//     setTimeout(() => {
//         console.log('5');
//     }, 1); 
// }

// func1();
// func2();
// func3();
// func4();
// func5();

// Exercise 1

function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = (value) => {
    return value + 1;
}

console.log(customMap(randomArray, increment));

const double = (value) => {
    return value * 2;
}

console.log(customMap(randomArray, double));

const square = (value) => {
    return value * value;
}

console.log(customMap(randomArray, square));