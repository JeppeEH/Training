'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(1, 2));

// const user = {
//     name: 'Jeppe',
//     cities: ['Tølløse', 'Holbæk', 'København'],
//     printPlacesLived: function (){
//        console.log(this.name);
//        console.log(this.cities);

//         const that = this;

//        this.cities.forEach(function (city){
//         console.log(that.name + ' har boet i ' + city);
//        })
//     }
// }


var user = {
    name: 'Jeppe',
    cities: ['Tølløse', 'Holbæk', 'København'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplyBy: 2,
    multiple: function multiple() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiple());
