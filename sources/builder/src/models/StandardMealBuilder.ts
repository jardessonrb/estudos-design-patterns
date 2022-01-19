import { MealBuilderProtocol } from "../interfaces/MealBuilderProtocol";
import { MealCompositeProtocol } from "../interfaces/MealCompositeProtocol";
import { Beans } from "./Beans";
import { Beverage } from "./Beverage";
import { Dessert } from "./Dessert";
import { MealAbstract } from "./MealAbstract";
import { MealBox } from "./MealBox";
import { Meat } from "./Meat";
import { Rice } from "./rice";

export class StandardMealBuilder implements MealBuilderProtocol{
    private _mealBox: MealBox = new MealBox();

    reset(): this{
        this._mealBox = new MealBox();
        return this;
    }

    makeStandardMeal(): this {
        const rice = new Rice("Arroz branco", 22);
        const beans = new Beans("Feijão branco", 7.5);
        const meat = new Meat("Carne de frango", 18);
        this._mealBox.add(rice, beans, meat);
        return this;
    }

    makeAddMeal(...meals: MealCompositeProtocol[]): this {
        meals.forEach(meal => this._mealBox.add(meal));
        return this;
    }

    makeBeverage(): this {
        const beverage = new Beverage("Bebida", 20)
        this._mealBox.add(beverage);
        return this;
    }

    makeDessert(): this {
        const dessert = new Dessert("Sobremesa", 15);
        this._mealBox.add(dessert);
        return this;
    }

    builder(): MealBox {
        return this._mealBox;
    }
    
}