// TEMPERATURE CONVERTER

class Temperature {
    private _celcius: number = 0;

    public get celcius(): number{
        return this._celcius;
    }

    public set celcius(newCelcius: number){
        this._celcius = newCelcius
    }

    public get fahrenhit(){
        return (this.celcius * 9/5) + 32
    }

    public set fahrenhit(newFahrenhit: number){
        this.celcius = (newFahrenhit - 32) * 9/5;
    }
}

const temp = new Temperature();
temp.celcius = 25
console.log(temp.fahrenhit);

temp.fahrenhit = 98.6
console.log(temp.celcius);