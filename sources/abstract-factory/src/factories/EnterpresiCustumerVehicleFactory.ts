import { Custumer } from "../custumer/custumer";
import { EnterpresiCostumer } from "../custumer/enterprise-costumer";
import { EnterpiseCar } from "../vehicle/Enterpresi-car";
import { VehicleProtocol } from "../vehicle/vehicle-protocol";
import { CustumerVehicleFactory } from "./CustumerVehicleFactory";


export class EnterpresiCustumerVehicleFactory implements CustumerVehicleFactory{
    createCustumer(custumerName: string): Custumer {
        return new EnterpresiCostumer(custumerName);
    }
    createVehicle(vehicleName: string, custumerName: string): VehicleProtocol {
        const custumer = this.createCustumer(custumerName);
        return new EnterpiseCar(vehicleName, custumer);
    }
    
}   