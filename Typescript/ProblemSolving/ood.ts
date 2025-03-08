// Base class (Parent)
class Vehicle {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  getName() {
    return "The car is a " + this.name + " " + this.model;
  }
}

// Single inheritance
// FuelCar class extending from Vehicle class
// Derived class (Child)
class FuelCar extends Vehicle {
  constructor(name, model, combustType) {
    super(name, model);
    this.combustType = combustType;
  }
  getFuelCar() {
    return this.getName() + ", combust type is " + this.combustType;
  }
}

// Hierarchical inheritance
// Alongside the FuelCar class, the ElectricCar class is also extending from Vehicle class
// Another Derived class (Child)
class ElectricCar extends Vehicle {
  constructor(name, model, batteryPower) {
    super(name, model);
    this.batteryPower = batteryPower;
  }
  getElectricCar() {
    return this.getName() + ", battery power is " + this.batteryPower;
  }
}

// Multi-level inheritance
// GasolineCar class is derived from the FuelCar class, which is further derived from the Vehicle class
// Derived class (Grandchild)
class GasolineCar extends FuelCar {
  constructor(name, model, combustType, gasCapacity) {
    super(name, model, combustType);
    this.gasCapacity = gasCapacity;
  }
  getGasolineCar() {
    return this.getFuelCar() + ", gas capacity is " + this.gasCapacity;
  }
}

// JavaScript does not support Multiple inheritance via classes

// main
console.log("Single inheritance:");
let Fuel = new FuelCar("Tesla", "ModelX", "200MWH");
console.log(Fuel.getFuelCar());
console.log(" ");

console.log("Hierarchical inheritance:");
let Electric = new ElectricCar("Honda", "Accord", "Petrol");
console.log(Electric.getElectricCar());
console.log(" ");

console.log("Multi-Level inheritance:");
let Gasoline = new GasolineCar("Toyota", "Corolla", "Gasoline", "300MWH");
console.log(Gasoline.getGasolineCar());
console.log(" ");

console.log("JavaScript does not support Multiple inheritance via classes");
