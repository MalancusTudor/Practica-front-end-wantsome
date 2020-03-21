/*
Exercise 1

Introducem un numar din 13 cifre
Verificam daca are 13 cifre, daca nu atunci CNP ul este incorect
Verificam daca prima cifra este 1 este de gen masculin
Daca este 2 este de gen feminin
Daca este alta cifra atunci CNP ul este incorect
*/

function getGender(cnp) {
    var firstDigit = Math.floor(cnp / (1e12));
    if(cnp < 1e13 && cnp >1e14) {
        return "CNP incorect";
    }
    switch(firstDigit) {
        case 1:
            return "Persoana verificata este de sexul masculin";
            break;
        case 2:
            return "Persoana verificata este de sexul feminin";
            break;
        default:
            return "CNP incorect";
    }
}

console.log(getGender(111111111111));
console.log(getGender(11111111111111));
console.log(getGender(1234567890123));
console.log(getGender(2234567891234));

/*
Exercise 2

Verificam daca valoarea introdusa este intre 1 si 10
Daca nu, returnam numar incorect, daca e atunci
Verificam in ce subinterval se situeaza pentru a vedea ce calificativ trebuie acordat
*/

var qualifier = function(grade) {
    if(grade < 1 || grade > 10) {
        return "Nota este incorecta";
    } else if(grade <= 3) {
        return "Calificatul corespunzator punctajului " + grade + " este E.";
    } else if(grade <= 6) {
        return "Calificatul corespunzator punctajului " + grade + " este D.";
    } else if(grade <= 7) {
        return "Calificatul corespunzator punctajului " + grade + " este C.";
    } else if(grade <= 8) {
        return "Calificatul corespunzator punctajului " + grade + " este B.";
    } else if(grade === 9) {
        return "Calificatul corespunzator punctajului " + grade + " este A.";
    } else if(grade === 10) {
        return "Calificatul corespunzator punctajului " + grade + " este A+.";
    }
}

console.log(qualifier(11));
console.log(qualifier(2));
console.log(qualifier(4));
console.log(qualifier(6.5));
console.log(qualifier(7.5));
console.log(qualifier(9));
console.log(qualifier(10));

/*
Exercise 3

In primul si al treilea caz construim obiectele cu 2 proprietati
Verificam care nume este dat ca argument si afisam proprietatea country obiectului aferent
In al doilea caz cu literali, construim un singur obiect in care key-urile sunt numele masinilor
si valorile sunt tarile si in functie de ce masina este data ca argument afisam mesajul corespunzator
*/

// First case

var getCountryFirstForm = function(nameOfCar) {
    function car(name, country){
        this.name = name;
        this.country = country;
    }

    var mercedes = new car("Mercedes", "Germania");
    var audi = new car("Audi", "Germania");
    var bmw = new car("BMW", "Germania");
    var mazda = new car("Mazda", "Japomia");
    var fiat = new car("Fiat", "Italia");
    var ferrari = new car("Ferrari", "Italia");
    
    if(mercedes.name === nameOfCar) {
        return "Marca " + nameOfCar + " se produce in " + mercedes.country;
    } else if(audi.name === nameOfCar) {
        return "Marca " + nameOfCar + " se produce in " + audi.country;
    } else if(bmw.name === nameOfCar) {
        return "Marca " + nameOfCar + " se produce in " + bmw.country;
    } else if(mazda.name === nameOfCar) {
        return "Marca " + nameOfCar + " se produce in " + mazda.country;
    } else if(fiat.name === nameOfCar) {
        return "Marca " + nameOfCar + " se produce in " + fiat.country;
    } else if(ferrari.name === nameOfCar) {
        return "Marca " + nameOfCar + " se produce in " + ferrari.country;
    } else {
        return "Marca este necunoscuta.";
    }
}

console.log(getCountryFirstForm("Mercedes"));
console.log(getCountryFirstForm("Audi"));
console.log(getCountryFirstForm("BMW"));
console.log(getCountryFirstForm("Mazda"));
console.log(getCountryFirstForm("Fiat"));
console.log(getCountryFirstForm("Ferrari"));
console.log(getCountryFirstForm("Dacia"));

// Second case

var getCountrySecondForm = function(nameOfCar) {
    var cars = {
        "Mercedes": "Marca " + nameOfCar + " se produce in Germania",
        "Audi": "Marca " + nameOfCar + " se produce in Germania",
        "Bmw": "Marca " + nameOfCar + " se produce in Germania",
        "Mazda": "Marca " + nameOfCar + " se produce in Japonia",
        "Fiat": "Marca " + nameOfCar + " se produce in Italia",
        "Ferrari": "Marca " + nameOfCar + " se produce in Italia",
        "default": "Marca necunoscuta."
    }

    return (cars[nameOfCar] || cars["default"]);
}

console.log(getCountrySecondForm("Mercedes"));
console.log(getCountrySecondForm("Audi"));
console.log(getCountrySecondForm("Bmw"));
console.log(getCountrySecondForm("Mazda"));
console.log(getCountrySecondForm("Fiat"));
console.log(getCountrySecondForm("Ferrari"));
console.log(getCountrySecondForm("Dacia"));

// Third case

var getCountryThirdForm = function(nameOfCar) {
    function car(name, country){
        this.name = name;
        this.country = country;
    }

    var mercedes = new car("Mercedes", "Germania");
    var audi = new car("Audi", "Germania");
    var bmw = new car("BMW", "Germania");
    var mazda = new car("Mazda", "Japomia");
    var fiat = new car("Fiat", "Italia");
    var ferrari = new car("Ferrari", "Italia");

    switch(nameOfCar) {
        case "Mercedes":
            return "Marca " + nameOfCar + " se produce in " + mercedes.country;
            break;
        case "Audi":
            return "Marca " + nameOfCar + " se produce in " + audi.country;
            break;
        case "BMW":
            return "Marca " + nameOfCar + " se produce in " + bmw.country;
            break;
        case "Mazda":
            return "Marca " + nameOfCar + " se produce in " + mazda.country;
            break;
        case "Fiat":
            return "Marca " + nameOfCar + " se produce in " + fiat.country;
            break;
        case "Ferrari":
            return "Marca " + nameOfCar + " se produce in " + ferrari.country;
        default:
            return "Marca este necunoscuta.";
    }
}

console.log(getCountryThirdForm("Mercedes"));
console.log(getCountryThirdForm("Audi"));
console.log(getCountryThirdForm("BMW"));
console.log(getCountryThirdForm("Mazda"));
console.log(getCountryThirdForm("Fiat"));
console.log(getCountryThirdForm("Ferrari"));
console.log(getCountryThirdForm("Dacia"));

/*
Exercise 4

Declaram vectorul.
Il sortam crescator.
Il afisam.
*/

(function () {
    var cars = [
        {name: "John",  salary: 20000 },
        {name: "Danny", salary: 30500 },
        {name: "Bekker", salary: 15000 }
    ];
    cars = cars.sort(function(a, b){
        return a.salary - b.salary;
    });
    console.log(cars);
})();