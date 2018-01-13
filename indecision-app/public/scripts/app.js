'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(1, 2));

var user = {
    name: 'Jeppe',
    cities: ['Tølløse', 'Holbæk', 'København'],
    printPlacesLived: function printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        var that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' har boet i ' + city);
        });
    }
};

console.log(user.printPlacesLived());
