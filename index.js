"use strict";
// TEMPERATURE CONVERTER
Object.defineProperty(exports, "__esModule", { value: true });
class Temperature {
    _celcius = 0;
    get celcius() {
        return this._celcius;
    }
    set celcius(newCelcius) {
        this._celcius = newCelcius;
    }
    get fahrenhit() {
        return (this.celcius * 9 / 5) + 32;
    }
    set fahrenhit(newFahrenhit) {
        this.celcius = (newFahrenhit - 32) * 9 / 5;
    }
}
const temp = new Temperature();
temp.celcius = 25;
console.log(temp.fahrenhit);
temp.fahrenhit = 98.6;
console.log(temp.celcius);
let x = "Huzaifa";
console.log(x.indexOf("H"));
