import { EnterpresiCustumerVehicleFactory } from "./factories/EnterpresiCustumerVehicleFactory";
import { IndividualCustumerVehicleFactory } from "./factories/IndividualCustumerVehicleFactory";

const enterpriseFactory = new EnterpresiCustumerVehicleFactory();
const individualFactory = new IndividualCustumerVehicleFactory();

const firstCar = enterpriseFactory.createVehicle("Civic", "Jardesson");
const secondCar = individualFactory.createVehicle("Corolla", "Tadeuzinho");

firstCar.pickUp();
secondCar.pickUp();
