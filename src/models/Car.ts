import { Vehicle } from "../interfaces/Vehicle";

export class Car implements Vehicle {
    start(): void {
        console.log("Car engine started");
    }

    stop(): void {
        console.log("Car engine stopped");
    }
}