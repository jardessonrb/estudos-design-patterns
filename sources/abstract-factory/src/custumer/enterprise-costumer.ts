import { Custumer } from "./custumer";

export class EnterpresiCostumer implements Custumer{
    constructor(public name: string){
        this.name += " Enterprise";
    }
}