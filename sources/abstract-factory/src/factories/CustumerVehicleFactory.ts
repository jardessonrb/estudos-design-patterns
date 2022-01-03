import { Custumer } from "../custumer/custumer";
import { VehicleProtocol } from "../vehicle/vehicle-protocol";

export interface CustumerVehicleFactory{
    createCustumer(custumerName: string): Custumer;
    createVehicle(vehicleName: string, custumerName: string): VehicleProtocol;
}
