import { sum } from "./index";
import { describe, it, expect } from "@jest/globals";

describe("Sum function", () => {
  it("should return zero when empty string is passed ", () => {
    expect(sum("")).toBe(0);
  });

  it("should return the same number when a single number is passed", () => {
    expect(sum("1")).toBe(1);
  });

  it("should return the sum of two numbers when two numbers are passed", () => {
    expect(sum("1,2")).toBe(3);
  });

  it("should return the sum of multiple numbers when multiple numbers are passed", () => {
    expect(sum("1,2,3,4,5")).toBe(15);
  });

  
  it("should handle the new line and return the sum of multiple numbers passed", () => {
    expect(sum("1\n2,3,4,5")).toBe(15);
  });

  it("should handle the new delimiter and return the sum of multiple numbers passed", () => {    
    expect(sum("//;\n1;2;3;4;5")).toBe(15);
  });

  it("should throw an error when a negative number is passed", () => {
    expect(() => sum("1,-2,3,4,5")).toThrowError("Negatives not allowed: -2");
  });
  
});
