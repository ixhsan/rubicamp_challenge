class CarFactory {
    constructor(tahunRakit) {
        this.tahunRakit = tahunRakit
        this.cars = []
    }

    Produksi(tahunRakit) {
        return this.GenerateList(this.GenerateCar(tahunRakit), tahunRakit)
    }

    SimulasiGaransi(tahunCek) {
        let MobilExpired = this.cars.filter((item) => {
            if (tahunCek - item.tahunProduksi > item.lamaGaransi) {
                return true
            } else {
                return false
            }
        })

        if (MobilExpired.length <= 0) {
            return `nothing here`
        } else {
            console.log(`Daftar mobil yang kadaluarsa pada tahun ${tahunCek}\n`)
            for (let i = 0; i < MobilExpired.length; i++) {
                console.log(`${i + 1}. ${MobilExpired[i].Brand} dengan UID ${MobilExpired[i].uid} Tahun produksi ${MobilExpired[i].tahunProduksi}`);
            }
        }

        return `\nAda ${MobilExpired.length} mobil yang garansinya habis di tahun ${tahunCek}`
    }

    GenerateCar(tahunProduksi) {
        let Random = this.Randomize()
        let Car = this.cars
        for (let i = 0; i < Random; i++) {
            Car.push(new Mercedes(tahunProduksi))
        }
        for (let i = 0; i < Random; i++) {
            Car.push(new Toyota(tahunProduksi))
        }
        return Car
    }

    // Deklarasi block fungsi
    GenerateList(carArray, tahunProduksi) {
        if (carArray.length <= 0) {
            return `Tidak ada produksi tahun ${tahunProduksi}`
        } else {
            console.log(`List produksi mobil tahun ${tahunProduksi}\n`);
            for (let i = 0; i < carArray.length; i++) {
                console.log(`${i + 1}. ${carArray[i].Brand} dengan UID ${carArray[i].uid}`);
            }
            return `\nTotal produksi ${carArray.length} mobil pada tahun ${tahunProduksi}\n`
        }
    }

    Randomize() {
        return Math.floor(Math.random() * (9 - 1) + 1)
    }

    GenerateUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }


}

class Car {
    constructor(tahunProduksi, tyreBrand = 'Bridgestone') {
        this.pintu = 4
        this.uid = (() => { return CarFactory.prototype.GenerateUID() })()
        this.tyre = new Tyre(tyreBrand).Brand
        this.tahunProduksi = tahunProduksi
    }

}

// merk mobil perkelas

class Mercedes extends Car {
    constructor(tahunProduksi, lamaGaransi = 5) {
        super(tahunProduksi, lamaGaransi)
        this.Brand = 'Mercedes'
        this.lamaGaransi = lamaGaransi
    }
}

class Toyota extends Car {
    constructor(tahunProduksi, lamaGaransi = 3) {
        super(tahunProduksi, lamaGaransi)
        this.Brand = 'Toyota'
        this.lamaGaransi = lamaGaransi
    }
}

class Tyre {
    constructor(Brand) {
        this.Diameter = 60
        this.Material = 'rubber'
        this.Brand = Brand
    }
}

const PabrikMobil = new CarFactory(2021)

console.log(PabrikMobil.Produksi(2023))
console.log(PabrikMobil.SimulasiGaransi(2027))