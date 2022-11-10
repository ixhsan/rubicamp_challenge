// experimenting with OOP

class CarFactory {
    constructor (name, tahunRakit, garansi) {
        this.name = name
        this.tahunRakit = tahunRakit
        this.garansi = garansi
        this.car = []
    }

    static PrintWarranty(value) {
        return `${this.prototype.thisIsProto()}, ${value}`
    }
    static GenerateUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          })
    }

    thisIsProto() {
        return 'test berhasil'
    }

}

class Car {
    constructor(pintu, engine) {
        this.pintu = pintu
        this.engine = engine
    }
}

// merk mobil perkelas

class Mercy extends Car {
    #Brand

    constructor(pintu, engine) {
        super(pintu, engine)
        this.#Brand = 'Mercy'
    }
}

class Toyota extends Car {
    #Brand
    constructor(pintu, engine) {
        super(pintu, engine)
        this.#Brand = 'Toyota'
    }
}

class Tyre {
    constructor(diameter, material) {
        this.diameter = diameter
        this.material = material
    }
}

const ban = new Tyre(20, 'rubber')
const Pabrik1 = new CarFactory('Pabrik1', '2026', 4)

console.log(ban);
console.log(Pabrik1.thisIsProto());
console.log(new CarFactory('Honda', '2025', 5));
console.log(new Mercy('4', '4-cylinder'));
console.log(CarFactory.GenerateUID(new CarFactory('Toyota', '2022', 5)));
console.log(CarFactory.PrintWarranty(4));