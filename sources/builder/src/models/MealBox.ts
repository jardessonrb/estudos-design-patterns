import { MealCompositeProtocol } from '../interfaces/MealCompositeProtocol';

export class MealBox implements MealCompositeProtocol{
    private readonly _children: MealCompositeProtocol[] = [];
    
    getPrice(): number {
        const valuePrice = this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);    
        return valuePrice;
    }

    add(...meal: MealCompositeProtocol[]): void {
        meal.forEach((meal) => this._children.push(meal));
    }

}