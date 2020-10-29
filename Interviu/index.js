// // afisare detalii
// // depunere
// // retragere

// let bankAccount = {
//     name: 'Tudor',
//     sold: 3000,
//     showDetails: function() {
//         console.log(`Name: ${this.name}\nSold: ${this.sold}`);
//     },
//     deposit: function(sold) {
//         this.sold += sold;
//     }
// }

// function f() {
//     console.log('asfasf');
// }

// f();

// let o = {
//     fn: f
// }

// o.fn();

// let fn = f.bind(o);

// f.call(o);

function bankAccount2(name, sold) {
    //1 creeaza un empty object
    //2 leaga object de prototype bankAccount2
    //3 returneaza obiectul nou creat
    this.name = name;
    this.sold = sold;
}

bankAccount2.prototype.showDetails = function() {
    console.log(`Name: ${this.name}\nSold: ${this.sold}`);
};

bankAccount2.prototype.deposit = function(sold) {
    this.sold += sold;
};

let tudorAccount = new bankAccount2('Tudor', 1000);
tudorAccount.showDetails();

let alexAccount = new bankAccount2('Alex',2000);
alexAccount.showDetails();

let fns = {
    sum: function(a,b) {
        return a + b;
    }
}

let o = Object.create(fns);
console.log(o);
console.log(o.sum(2, 3));