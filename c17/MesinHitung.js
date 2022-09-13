export const Pi = 22/7

export default class MesinHitung {
    constructor () {
        this.x = 1
    }

    add(value) {
        this.x += value
        return this
    }

    subtract(value) {
        this.x -= value
        return this
    }

    multiply(value) {
        this.x *= value
        return this
    }

    divide(value) {
        this.x /= value
        return this
    }

    square() {
        this.x = this.x * this.x
        return this
    }

    squareRoot() {
        this.x = Math.sqrt(this.x)
        return this
    }

    exponent(value) {
        this.x **= value
        return this
    }

    result() {
        console.log(`${this.x}`);
    }
}