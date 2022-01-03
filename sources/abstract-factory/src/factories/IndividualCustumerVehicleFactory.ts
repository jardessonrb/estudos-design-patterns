import { Custumer } from "../custumer/custumer";
import { IndividualCostumer } from "../custumer/individual-costumer";
import { IndividualCar } from "../vehicle/individual-car";
import { VehicleProtocol } from "../vehicle/vehicle-protocol";
import { CustumerVehicleFactory } from "./CustumerVehicleFactory";

export class IndividualCustumerVehicleFactory implements CustumerVehicleFactory{
    createCustumer(custumerName: string): Custumer {
        return new IndividualCostumer(custumerName);
    }
    createVehicle(vehicleName: string, custumerName: string): VehicleProtocol {
        const custumer = this.createCustumer(custumerName);
        return new IndividualCar(vehicleName, custumer);
    }
}   