// experimenting with OOP

class CarFactory{
    constructor(_Name, _TahunRakit, _Garansi) {
        this.name = _Name
        this.tahunRakit = _TahunRakit
        this.garansi = _Garansi
        this.cars = []
    }

    Produksi(years) {

        let countMercy = 0
        for (let i = 0; i < CarFactory.Randomize(); i++) {
            this.cars.push(new Bmw(CarFactory.GenerateUID(), years))
            countMercy++
        }
        
        let countBmw = 0
        for (let i = 0; i < CarFactory.Randomize(); i++) {
            this.cars.push(new Mercedes(CarFactory.GenerateUID(), years))
            countBmw++
        }

        CarFactory.ListProduksi(this.cars, years, countMercy, countBmw)
        // console.log(`\nJumlah total produksi per bulan ${CarFactory.Randomize()} unit mobil`);
        // CarFactory.hitung()
    }

    SimulasiGaransi(years) {

        let count = 0 
        console.log(`\nDaftar mobil yang garansinya kadaluarsa pada ${years}`);

        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].tahunRakit + this.cars[i].garansi < years) {
                console.log(`${count}.Tipe mobil ${this.cars[i].name}, dengan rangka ${this.cars[i].engine}.\n`)
                count++
            } else {
                console.log(`\ntidak ada\n`)
                break
            }
        }


        // if (CarFactory.Randomize() !== a.Garansi){
        //     var b = a.Garansi - CarFactory.Randomize()
        // }
        // console.log(`\nTipe mobil ${a.name},\nMasa pakai telah ${e} tahun,\nGaransi tersisa ${b} tahun `)

    }

    static Randomize() {
        return Math.floor(Math.random() * (9 - 1) + 1)
    }

    static GenerateUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          })
    }

    static ListProduksi(mobil, years, a, b) {
        console.log(`List produksi mobil tahun ${years} di Pabrik-1:\n`)
        let count = 1
        for (let i = 0; i < mobil.length; i++) {
            console.log(`${count}. Tipe: ${mobil[i].name}\nPintu: ${mobil[i].pintu}\nEngine: ${mobil[i].engine}\nTahun Rakit: ${mobil[i].tahunRakit}\nGaransi: ${mobil[i].garansi} tahun\nBan: ${mobil[i].ban.type} ${mobil[i].ban.size}\n-----------------`)
            count++
        }
        console.log(`Produksi mobil Mercedes tipe E200 : ${a} mobil / tahun.\nProduksi mobil BMW tipe M2 : ${b} mobil / tahun.\n-----------------`);
    }

}

// --------------------------------------------------------------------------------------------------------------------

class Tyre {
    constructor (_Type, _Size) {
        this.type = _Type
        this.size = _Size
    }
} 

// --------------------------------------------------------------------------------------------------------------------

class Car{
    constructor (_Name, _Pintu, _Engine, _FuelTank, _TahunRakit, _Garansi, _Ban) {
        this.name = _Name
        this.pintu = _Pintu
        this.engine = _Engine
        this.fuelTank = _FuelTank
        this.tahunRakit = _TahunRakit
        this.garansi = _Garansi
        this.ban = _Ban
    }
}

class Mercedes extends Car {
    constructor (_Engine, _TahunRakit) {
        super("E200", 4, _Engine, "66L", _TahunRakit, 3, new Tyre("Bridgestone", "19 inch"))
    }
}

class Bmw extends Car {
    constructor (_Engine, _TahunRakit) {
        super("M2", 4, _Engine, "66L", _TahunRakit, 3, new Tyre("Kenda", "19 inch"))
    }  
}


// --------------------------------------------------------------------------------------------------------------------


let Pabrik1 = new CarFactory("Pabrik-1", 2021, 3)

Pabrik1.Produksi(2021)
Pabrik1.SimulasiGaransi(2025)