import { Vehicle } from "../interfaces/Vehicle";
import { Car } from "../models/Car";
import { Motorcycle } from "../models/Motorcycle";

export class VehicleFactory {
  createVehicle(type: string): Vehicle | null {
    switch (type.toLowerCase()) {
      case "car":
        return new Car();
      case "motorcycle":
        return new Motorcycle();
      default:
        return null;
    }
  }
}
