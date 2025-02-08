import { describe, it, expect } from "vitest";
import { VehicleFactory } from "../../src/factories/VehicleFactory";
import { Car } from "../../src/models/Car";
import { Motorcycle } from "../../src/models/Motorcycle";

describe("VehicleFactory", () => {
  const factory = new VehicleFactory();

  it("should create a Car instance", () => {
    const vehicle = factory.createVehicle("car");
    expect(vehicle).toBeInstanceOf(Car);
  });

  it("should create a Motorcycle instance", () => {
    const vehicle = factory.createVehicle("motorcycle");
    expect(vehicle).toBeInstanceOf(Motorcycle);
  });

  it("should return null for invalid vehicle type", () => {
    const vehicle = factory.createVehicle("invalid");
    expect(vehicle).toBeNull();
  });
});
