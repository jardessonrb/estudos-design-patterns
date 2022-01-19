import { MealCompositeProtocol } from "../interfaces/MealCompositeProtocol";

export abstract class MealAbstract implements MealCompositeProtocol{
    constructor(private name: string, private price: number){}
    
    getPrice(): number {
        return this.price;
    }
    
}