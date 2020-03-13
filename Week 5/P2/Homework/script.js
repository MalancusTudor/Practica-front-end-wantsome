//Exercise 1

function is_string(text) {
    if(typeof(text) === "string") {
        console.log(true);
    } else {
        console.log(false);
    }
}

is_string("w3resource");
is_string([1,2,4,0]);

//Exercise 2

function is_Blank(text) {
    if(text.length === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

is_Blank("");
is_Blank("abc");

//Exercise 3

function string_to_array(text) {
    console.log(text.split(" "));
}

string_to_array("Robin Singh");

//Exercise 4

function abbrev_name(text) {
    var name = text.split(" ");
    for(i = 1; i < name.length; ++i) {
        name[i] = name[i-1] + " " + name[i][0] + ".";
    }
    console.log(name[name.length - 1]);
}

abbrev_name("Popescu Alexandru Mihail");

//Exercise 5

function capitalize(text) {
    var result = text[0].toUpperCase();
    console.log(result + text.slice(1));
}

capitalize("js string exercises");

//Exercise 6

function truncate_string(text, charToEliminate) {
    console.log(text.slice(0, charToEliminate));
}

truncate_string("Robin Singh", 4);

//Exercise 7

function isUpperCaseAt(text, index) {
    if(text.charCodeAt(index) >= 65 && text.charCodeAt(index) <= 90) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isUpperCaseAt('Js STRING EXERCISES', 1);

//Exercise 8

function insert(initialString, stringToBeInserted, position) {
    console.log(initialString.slice(0, position) + stringToBeInserted + initialString.slice(position));
}

insert('We are doing some exercises.','JavaScript ',18);

//Exercise 9

function remove_first_occurrence(text, stringToBeRemoved) {
    var stringBefore = text.slice(0, text.indexOf(stringToBeRemoved));
    var stringAfter = text.slice(text.indexOf(stringToBeRemoved) + stringToBeRemoved.length);
    var result = stringBefore + stringAfter;
    console.log(result);
}

remove_first_occurrence("The quick brown fox jumps over the lazy dog", "the");

//Exercise 10

function compare_strings(firstString, secondString) {
    if(firstString === secondString) {
        console.log(true);
    } else {
        console.log(false);
    }
}

compare_strings("abcd", "AbcD");

//Exercise 11

function uncapitalize(text) {
    var result = text[0].toLowerCase();
    console.log(result + text.slice(1));
}

uncapitalize("Js string exercises");