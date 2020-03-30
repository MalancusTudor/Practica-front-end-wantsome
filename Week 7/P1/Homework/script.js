// Exercise 1

for(var i = 0; i <= 20; ++i) {
    if(i % 2 === 0) {
        console.log(i + " este par");
    } else {
        console.log(i + " este impar");
    }
}

var i = 0;

while(i <= 20) {
    if(i % 2 === 0) {
        console.log(i + " este par");
    } else {
        console.log(i + " este impar");
    }
    i += 1;
}

// Exercise 2

for(var i = 0; i <= 10; ++i) {
    console.log(i + " * 9 = " + (i * 9));
}

var i = 0;

while(i <= 10) {
    console.log(i + " * 9 = " + (i * 9));
    i += 1;
}

//Exercise 3

for(var i = 1; i <= 10; ++i) {
    for(var j = 0; j <= 10; ++j) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}

// Exercise 4

var qualifier = function(grade) {
    if(grade < 1 || grade > 10) {
        return "Nota este incorecta";
    } else if(grade <= 3) {
        return "Pentru " + grade + ", obtii califivativul E.";
    } else if(grade <= 6) {
        return "Pentru " + grade + ", obtii califivativul D.";
    } else if(grade <= 7) {
        return "Pentru " + grade + ", obtii califivativul C.";
    } else if(grade <= 8) {
        return "Pentru " + grade + ", obtii califivativul B.";
    } else if(grade === 9) {
        return "Pentru " + grade + ", obtii califivativul A.";
    } else if(grade === 10) {
        return "Pentru " + grade + ", obtii califivativul A+.";
    }
}

for(var i = 1; i <= 10; ++i) {
    console.log(qualifier(i));
}