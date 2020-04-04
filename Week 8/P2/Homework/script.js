// Exercise 1

const sum = (number) => {
    if(number % 1 !==0) {
        return "Invalid number!!!";
    }
    let sum = 0;
    for(i = 0; i <= number; ++i) {
        sum += i;
    }
    return sum;
}

console.log(sum(2.5));
console.log(sum(9));

// Exercise 2

const findLongestString = (sentence) => {
    let words = sentence.split(" ");
    let maxLength = 0;
    let longestWord = "";
    for(i = 0; i < words.length; ++i) {
        if(maxLength < words[i].length) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findLongestString("Wantsome is Awsomeeee today"));

// Exercise 3

const reverseString = (word) => {
    return word.split("").reverse().join("");
}

console.log(reverseString("Tudor"));

// Exercise 4

const replaceLetter = (word) => {
    word = word.toLowerCase();
    var result = "";
    for (var i = 0; i < word.length; ++i) {
        if (96 < word.charCodeAt(i) && word.charCodeAt(i) < 123) {
            result += String.fromCharCode(word.charCodeAt(i) + 1);
        }
    }
    return result;
}

console.log(replaceLetter("abcdef"));

// Exercise 5

const convertToTime = (number) => {
    if(number % 1 !== 0) {
        return "Invalid number!!!";
    }
    return Math.floor((number / 60)) + " : " + (number % 60); 
}

console.log(convertToTime(64));
console.log(convertToTime(149));

// Exercise 6

const alphabeticalOrder = (word) => {
    return word.split("").sort().join("");
}

console.log(alphabeticalOrder("acebfd"));

// Exercise 7

const charExists = (word) => {
    for(i = 0; i < word.length; ++i) {
        if(i % 2 === 0 && word[i] !== "+") {
            return false;
        } else if(i % 2 === 1 && word[i] === "+") {
            return false;
        }
    }
    return true;
}

console.log(charExists("+a+b+c+"));
console.log(charExists("+ab+c+d+"));
console.log(charExists("+a++b+c+d+"));