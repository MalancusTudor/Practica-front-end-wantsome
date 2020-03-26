//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function protect(email) {
    var emailSplitByDot = email.split(".");
    var emailSplitByA = email.split("@");
    return emailSplitByDot[0] + "...@" + emailSplitByA[1];
}

console.log(protect("ovidiu.grigoras@test.com"));

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function firstLetterUpperCase(sentence) {
    var splitSentence = sentence.split(" ");
    for(var i = 0; i < splitSentence.length; ++i) {
        var word = splitSentence[i].split("");
        word[0] = word[0].toUpperCase();
        splitSentence[i] = word.join("");
    }
    return splitSentence.join(" ");
}

console.log(firstLetterUpperCase("i am superman"));

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function reverseLetter(word) {
    var letters = word.split("");
    for(var i = 0; i < letters.length; ++i) {
        if(letters[i].charCodeAt(0) >= 97 && letters[i].charCodeAt(0) <= 122) {
            letters[i] = letters[i].toUpperCase();
        } else if(letters[i].charCodeAt(0) >= 65 && letters[i].charCodeAt(0) <= 90) {
            letters[i] = letters[i].toLowerCase();
        }
    }
    //   var i = 0;
    //   var word1 = [];
    //   while(i < word.length) {
    //     if(word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
    //       word[i] = word[i].toUpperCase();
    //     } else if(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
    //       word[i] = word[i].toLowerCase();
    //     }
    //     i += 1;
    //   }
    
    return letters.join("");
}

console.log(reverseLetter("xxXyYzZZ"));

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatenateByNumber(word, number) {
    var i = 0;
    var result = "";
    while(i < number) {
        result = result + word;
        i += 1;
    }
    return result;
}

console.log(concatenateByNumber("Wantsome", 2));

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function palindrome(word) {
    for(var i = 0; i < (word.length / 2); ++i) {
        if(word[i] !== word[word.length - i - 1]) {
            return "Cuvantul nu e palindrom";
        }
    }
    return "Cuvantul e palindrom";
}

console.log(palindrome("level"));

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array

function greatestNumber(bigArray) {
    var result = [];
    for(var i = 0; i < bigArray.length; ++i) {
        var aux = 0;
        for(var j = 0; j < bigArray[i].length; ++j) {
            if(aux < bigArray[i][j]) {
                aux = bigArray[i][j]
            }
        }
        result[i] = aux;
    }
    return result;
}

console.log(greatestNumber([[1, 2, 3], [3, 4, 5], [9, 8, 7]]))

//Ex7
// Implementati o functie care face reverse la un string

function reverseString(word) {
    var result = [];
    for(var i = 0; i < word.length; ++i) {
        result[i] = word[word.length - 1 -i];
    }
    return result.join("");
}

console.log(reverseString("Tudor"));

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function factorial(number) {
    var result = 1;
    for(var i = 1; i <= number; ++i) {
        result *= i;
    }
    return result;
}

console.log(factorial(4));

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function endsWith(bigString, endString) {
    if(bigString.endsWith(endString)) {
        return true;
    } else {
        return false;
    }
}

console.log(endsWith("Tudor", "dor"));

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat

var checkName = function(string) {
    if(string === "Tudor") {
        return true;
    } else {
        return false;
    }
}

function test(array, func) {
    for(var i = 0; i < array.length; ++i) {
        if(func(array[i])){
            return "Acest element a trecut testul: " + array[i];
        }
    }
    return "Niciun element nu a trecut testul";
}

console.log(test(["Tudor", "Ana", "Marius"], checkName));

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string

function includeLetters(firstString, secondString) {
    if(firstString.includes(secondString, 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(includeLetters("Tudor", "rdo"));

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata

function displayByValue(array, value) {
    var result = [];
    for(var i = 0; i < array.length; ++i) {
        if(array[i] === value) {
            break;
        }
        result[i] = array[i];
    }
    return result;
}

console.log(displayByValue([1, 2, 3, 4, 5, 6], 4));

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

function deleteFalse(array) {
    for(var i = 0; i < array.length; ++i) {
        if(array[i] === false || array[i] === null || array[i] === 0 || array[i] === "" || array[i] === undefined || array[i] === NaN) {
            array.splice(i, 1);
        }
    }
    return array;
}

console.log(deleteFalse([false, 2, null, 3, 4, ]));

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate

function repeatString(string, number) {
    return string.repeat(number);
}

console.log(repeatString("Tudor", 3));