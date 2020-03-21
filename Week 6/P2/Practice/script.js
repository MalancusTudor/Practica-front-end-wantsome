//Exercise 1

function greatestNrBetween(firstNumber, secondNumber) {
    if(firstNumber >= secondNumber) {
        return "Numarul mai mare dintre " + firstNumber + " si " + secondNumber + " este " + firstNumber;
    } else {
        return "Numarul mai mare dintre " + firstNumber + " si " + secondNumber + " este " + secondNumber;
    }
}

console.log(greatestNrBetween(5, 10));
console.log(greatestNrBetween(20, 10));

//Exercise 2

var helloWorldInLang = function(lang) {
    switch(lang) {
        case "en":
            return "Hello World!";
            break;
        case "es":
            return "Hello World! (in spaniola)";
            break;
        case "de":
            return "Hello World! (in germana)";
            break;
        default:
            return "Hello World!";
    }
}

console.log(helloWorldInLang("en"));
console.log(helloWorldInLang("es"));
console.log(helloWorldInLang("de"));
console.log(helloWorldInLang("ro"));

var helloWorldInLangIfElse = function(lang) {
    if(lang === "en") {
        return "Hello World!";
    } else if(lang === "es") {
        return "Hello World! (in spaniola)";
    } else if(lang === "de") {
        return "Hello World! (in germana)";
    } else {
        return "Hello World!";
    }
}

console.log(helloWorldInLangIfElse("en"));
console.log(helloWorldInLangIfElse("es"));
console.log(helloWorldInLangIfElse("de"));
console.log(helloWorldInLangIfElse("ro"));

//Exercise 3

function pluralizeWord(word, number) {
    switch(word) {
        case "sheep":
            return number + " " + word;
            break;
        case "goose":
            if(number > 1) {
                return number + " " + "geese";
            } else {
                return number + " " + word;
            }
            break;
        default:
            if(number > 1) {
                return number + " " + word + "s";
            } else {
                return number + " " + word;
            }
    }
}

console.log(pluralizeWord("cat", 5));
console.log(pluralizeWord("dog", 1));
console.log(pluralizeWord("sheep", 3));
console.log(pluralizeWord("goose", 3));

//Exercise 4

function taxes(income) {
    if(income < 30000) {
        return "Pentru un venit anual de " + income + ", aveti de platit taxe in valoare de " + (income * 0);
    } else if(income > 30000 && income < 99999) {
        return "Pentru un venit anual de " + income + ", aveti de platit taxe in valoare de " + (income * 0.35);
    } else {
        return "Pentru un venit anual de " + income + ", aveti de platit taxe in valoare de " + (income * 0.4);
    }
}

console.log(taxes(12000));
console.log(taxes(35000));
console.log(taxes(150000));

//Exercise 5

function evaluate(points) {
    switch(true) {
        case (points > 90):
            return "AA if points is greater than 90";
            break;
        case (points > 80 && points <= 90):
            return "AB if points is greater than 80 and less than or equal to 90";
            break;
        case (points > 70 && points <= 80):
            return "BB if points is greater than 70 and less than or equal to 80";
            break;
        case (points > 60 && points <= 70):
            return "BC if points is greater than 60 and less than or equal to 70";
            break;
        case (points > 50 && points <= 60):
            return "CC if points is greater than 50 and less than or equal to 60";
            break;
        case (points > 40 && points <= 50):
            return "CD if points is greater than 40 and less than or equal to 50";
            break;
        case (points > 30 && points <= 40):
            return "DD if points is greater than 30 and less than or equal to 40";
            break;
        case (points < 30):
            return "FF if points is less than or equal to 30";
            break;  
        default:
    }
}

console.log(evaluate(99));
console.log(evaluate(89));
console.log(evaluate(79));
console.log(evaluate(69));
console.log(evaluate(59));
console.log(evaluate(49));
console.log(evaluate(39));
console.log(evaluate(29));

function evaluateIfElse(points) {
    if(points > 90) {
        return "AA if points is greater than 90";
    } else if (points > 80 && points <= 90) {
        return "AB if points is greater than 80 and less than or equal to 90";
    } else if (points > 70 && points <= 80) {
        return "BB if points is greater than 70 and less than or equal to 80";
    } else if (points > 60 && points <= 70) {
        return "BC if points is greater than 60 and less than or equal to 70";
    } else if (points > 50 && points <= 60) {
        return "CC if points is greater than 50 and less than or equal to 60";
    } else if (points > 40 && points <= 50) {
        return "CD if points is greater than 40 and less than or equal to 50";
    } else if (points > 30 && points <= 40) {
        return "DD if points is greater than 30 and less than or equal to 40";
    } else {
        return "FF if points is less than or equal to 30";
    }
}

console.log(evaluateIfElse(99));
console.log(evaluateIfElse(89));
console.log(evaluateIfElse(79));
console.log(evaluateIfElse(69));
console.log(evaluateIfElse(59));
console.log(evaluateIfElse(49));
console.log(evaluateIfElse(39));
console.log(evaluateIfElse(29));

//Exercise 6

function isWeekend(date) {
    var dateParse = new Date(date);
    if(dateParse.getDay() == 6 || dateParse.getDay() == 0) {
        return "weekend";
    } 
}

console.log(isWeekend('Nov 15, 2014'));
console.log(isWeekend('Nov 16, 2014'));
console.log(isWeekend('Nov 17, 2014'));