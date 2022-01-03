import { Custumer } from "./custumer";


export class IndividualCostumer implements Custumer{
    constructor(public name: string){
        this.name += " Individual"
    }
}