import { Custumer } from "../custumer/custumer";
import { VehicleProtocol } from "./vehicle-protocol";

export class EnterpiseCar implements VehicleProtocol{
    constructor(public name: string, private readonly custumer: Custumer){}
    pickUp(): void {
        console.log(`${this.name} está buscando ${this.custumer.name}`)
    }
}