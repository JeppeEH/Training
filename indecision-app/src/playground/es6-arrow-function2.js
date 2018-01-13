

const add =  (a,b) => {
    return a+b;
}

console.log(add(1,2));


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


const user = {
        name: 'Jeppe',
        cities: ['Tølløse', 'Holbæk', 'København'],
        printPlacesLived() {

            return this.cities.map((city) => this.name + ' has lived in ' + city);
        }
    }
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5,6,7,8,9,10],
    multiplyBy: 2,
    multiple() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}


console.log(multiplier.multiple());