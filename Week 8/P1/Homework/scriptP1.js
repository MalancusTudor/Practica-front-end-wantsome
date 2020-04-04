// Exercise 1

const sum = (...args) => {
    if(args[0] !== args[1]) {
        return args[0] + args[1];
    } else {
        return (args[0] + args[1]) * 5;
    }
}

console.log(sum(10, 5));
console.log(sum(10, 10));

// Exercise 2

const equalNumbers = (...args) => {
    if(args[0] === args[1]) {
        return true;
    } else if ((args[0] + args[1]) === 30) {
        return true;
    } else {
        return false;
    }
}

console.log(equalNumbers(30, 30));
console.log(equalNumbers(15, 15));
console.log(equalNumbers(10, 15));

//Exercise 3

const beginsWith = (word) => {
    if(typeof(word) !== "string") {
        return "JS";
    } else if (word.startsWith("JS")) {
        return word;
    } else {
        return "JS" + word;
    }
}

console.log(beginsWith("JSisAwsome"));
console.log(beginsWith("isEasy"));
console.log(beginsWith(null));

// Exercise 4

const removeDuplicates = (duplicate) => {
    let noDuplicates = "";
    duplicate += "";
    for(i = 0; i < duplicate.length; ++i) {
        if(noDuplicates.indexOf(duplicate[i]) === -1) {
            noDuplicates += duplicate[i];
        }
    }
    return noDuplicates;
}

console.log(removeDuplicates("aaabbbcdeef"));
console.log(removeDuplicates(122334));

// Exercise 5

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

// Exercise 6

const drawing = () => {
    let symbol = " * ";
    let result = "";
    for(i = 1; i <= 5; ++i) {
        result += symbol.repeat(i) + "\n";
    }
    return result;
}

console.log(drawing());

// Exercise 7

const extractNegativeNumbers = (...args) => {
    let result = [];
    for(i = 0; i < args.length; ++i) {
        if(args[i] < 0) {
            result.push(args[i]);
        }
    }
    return result;
}

const negativeNumbers = extractNegativeNumbers(1, 2, -5, 4, -6);
console.log(negativeNumbers);

// Exercise 8

const calculate = (...args) => {
    let result = 0;
    switch(args[2]) {
        case "add":
        result = args[0] + args[1];
        break;
        case "substract":
        result = args[0] - args[1];
        break;
        case "multiply":
        result = args[0] * args[1];
        break;
        case "divide":
        if(args[1] === 0) {
            return "Invalid argument 2!!!";
        } else {
            result = args[0] / args[1];
        }
        break;
        default:
        return "Invalid operator!!!";
    }
    return result;
}

console.log(calculate(2, 3, "add"));
console.log(calculate(5, 2, "substract"));
console.log(calculate(5, 2, "multiply"));
console.log(calculate(4, 0, "divide"));
console.log(calculate(4, 2, "divide"));
console.log(calculate(4, 6, "operator"));

// Exercise 9

const isDiv = (number) => {
    if(number % 3 === 0 && number % 5 === 0) {
        return "BOTH";
    } else if(number % 3 === 0) {
        return "THREE";
    } else if(number % 5 === 0) {
        return "FIVE";
    } else {
        return number;
    }
}

console.log(isDiv(15));
console.log(isDiv(10));
console.log(isDiv(9));
console.log(isDiv(7));

// Exercise 10

const showDate = () => {
    let d = new Date();
    let result = "";
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    result = "Today is: " + weekday[d.getDay()] + "\n";
    let hour = "";
    if(d.getHours() < 12) {
        hour = d.getHours() + " AM";
    } else {
        hour = d.getHours() - 12 + " PM";
    }
    result += "Hour is: " + hour + " : " + d.getMinutes() + " : " + d.getSeconds();
    return result;
}

console.log(showDate());

//Exercise 11

const validPin = (pin) => {
    if(pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    
    for(i = 0; i < pin.length; ++i) {
        if(pin.charCodeAt(i) < 48 || pin.charCodeAt(i) > 57) {
            return false;
        }
    }
    
    return true;
}

console.log(validPin("1234"));
console.log(validPin("12345"));
console.log(validPin("z23f"));
console.log(validPin("123456"));
console.log(validPin("12345;"));

// Exercise 12

const removeVowels = (sentence) => {
    return sentence.replace(/[aeiou]/g, "");
}

console.log(removeVowels("Hey I am developer"));

// Exercise 13

const isSquareNumber = (number) => {
    if(number < 0) {
        return false;
    } else if(Math.sqrt(number) % 1 !== 0) {
        return false;
    } else {
        return true;
    }
}

console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(3));

// Exercise 14

const isAnagram = (firstString, secondString) => {
    firstString = firstString.toLowerCase();
    firstString = firstString.split(" ").join("");
    secondString = secondString.toLowerCase();
    secondString = secondString.split(" ").join("");
    for(var i = 0; i < firstString.length; i++) {
        if(secondString.indexOf(firstString[i]) === -1){
            return false;
        }
    }
    return true;
}
console.log("asf");
console.log(isAnagram("School master", "The class room"));
console.log(isAnagram("silent", "listen"));
console.log(isAnagram("silent", "apple"));