import { Vehicle } from "../interfaces/Vehicle";

export class Motorcycle implements Vehicle {
  start(): void {
    console.log("Motorcycle engine started");
  }

  stop(): void {
    console.log("Motorcycle engine stopped");
  }
}
