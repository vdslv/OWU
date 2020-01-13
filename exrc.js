class User {
    constructor(name, surname, age, job, hairColor,id ) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.job = job;
        this.hairColor = hairColor;
        this.id = id;
    }
    toString() {
        console.log(this);
    }
}

let users = [
    new User('Ivan', 'Petrovich', 55,'Dishwasher', 'red', 1),
    new User('Petro', 'Ivanovych', 45,'drugdiller', 'blue', 2),
    new User('Vasya', 'Afanasiyovuch', 33,'crack', 'orange',3),
    new User('Oleg', 'Igorovych', 22,'cardiller', 'pink',4),
    new User('Andriy', 'Olegovych', 53,'hairdresser', 'grey',5),
    new User('Stepan', 'Petrovich', 13,'cashier', 'green'),
    new User('Taras', 'Andriyovych', 42,'lifeguard', 'black'),
    new User('Roman', 'Albertovych', 31,'waiter', 'brown'),
    new User('Vlad', 'Tarasovych', 25,'animator', 'yellow')
];

let sortAge = users.sort( (a,b) => {
   return b.age - a.age;
});

let sortString = users.sort( (a,b) => {
   return a.surname.length - b.surname.length;
});

let filterName = users.filter( el => {
   return el.name.length > 4 ? el : '';
});


Array.prototype.sortirovka = function(arr) {
    return Math.min(...arr);
}
let arr111 = [7,2,3,4,5];
console.log(arr111.sortirovka(arr111));

Array.prototype.onlyID = function (arr) {
    for (let el of arr) {
        if (el.id > 0) {
            console.log(el);
        }
    }
}


console.log(users.onlyID(users));



