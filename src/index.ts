import { VehicleFactory } from "./factories/VehicleFactory";

const factory = new VehicleFactory();

const car = factory.createVehicle("car");
car?.start();
car?.stop();

const motorcycle = factory.createVehicle("motorcycle");
motorcycle?.start();
motorcycle?.stop();
