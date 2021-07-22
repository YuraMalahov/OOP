import { Liquor } from "./liquor";
import { Necessity } from "./nesessity";
import { TaxHolidayVisitor } from "./tax-holiday-visitor";
import { TaxVisitor } from "./tax-visitor";
import { Tobacco } from "./tobacco";

let taxCalc = new TaxVisitor();
let taxHolidayCalc = new TaxHolidayVisitor();

let milk = new Necessity(10, 'milk');
let visky = new Liquor(80, 'visky');
let cigars = new Tobacco(50, 'cigars');

console.log(milk.accept(taxCalc));
console.log(visky.accept(taxCalc));
console.log(cigars.accept(taxCalc));
