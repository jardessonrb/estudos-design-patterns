import { Beverage } from "./models/Beverage";
import { Meat } from "./models/Meat";
import { StandardMealBuilder } from "./models/StandardMealBuilder";

const standardMeal = new StandardMealBuilder();

const meat = new Meat("Coxão mole", 30);
const beverage = new Beverage("Coca-cola 2l", 8);
const meal = standardMeal.makeStandardMeal();
meal.makeAddMeal(meat, beverage);

const pedido = meal.builder();

console.log(pedido, pedido.getPrice())

