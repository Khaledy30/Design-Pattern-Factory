import { describe, it, expect, vi } from "vitest";
import { Motorcycle } from "../../src/models/Motorcycle";

describe("Motorcycle", () => {
  it("should start the motorcycle engine", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const motorcycle = new Motorcycle();

    motorcycle.start();

    expect(consoleSpy).toHaveBeenCalledWith("Motorcycle engine started");
  });

  it("should stop the motorcycle engine", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const motorcycle = new Motorcycle();

    motorcycle.stop();

    expect(consoleSpy).toHaveBeenCalledWith("Motorcycle engine stopped");
  });
});
