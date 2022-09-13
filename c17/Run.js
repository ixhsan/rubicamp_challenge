import MesinHitung from "./MesinHitung.js"
import { Pi } from "./MesinHitung.js";

const Calc = new MesinHitung();
Calc.add(10).result()
Calc.add(10).subtract(5).result(); // 1 + 10 - 5 = 6
Calc.add(3).multiply(4).divide(6).result(); // current result is 2 then the Calcutate is : 6 + 3 * 4 / 6 = 6
Calc.x = 7; //set jari jari 7
Calc.multiply(2).multiply(Pi).result(); //keliling lingkaran dengan jari jari 7 => 2 x Pi x r = 44
Calc.x = 7; //set jari jari 7
Calc.square().multiply(Pi).result(); // luas lingkaran dengan jari jari 7 => Pi x r pangkat 2 = 154
Calc.x = 4;
Calc.exponent(3).result(); // 4 pangkat 3 = 64
Calc.squareRoot().result(); // akar pangkat 2 dari 64 = 8