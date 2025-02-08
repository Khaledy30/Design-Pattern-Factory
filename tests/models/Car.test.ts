import { describe, it, expect, vi } from "vitest";
import { Car } from "../../src/models/Car";

describe("Car", () => {
  it("should start the car engine", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const car = new Car();

    car.start();

    expect(consoleSpy).toHaveBeenCalledWith("Car engine started");
  });

  it("should stop the car engine", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const car = new Car();

    car.stop();

    expect(consoleSpy).toHaveBeenCalledWith("Car engine stopped");
  });
});
