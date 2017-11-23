
 
"use strict";
  class VehicleDealership {

    constructor(vehicleName, vehicleType,brand) {
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;
        this.brand = brand;
        
    }

    typeofVehicle() {
        return `Name of vehicle is ${this.vehicleName} it is a  ${this.vehicleType},`;
    }
    vehicleBrand() {
        return `The brand is ${this.brand} ${this.vehicleName}`;
    }
    
    vehicleDetails(){
      return this.typeofVehicle + this.vehicleBrand;
    }
   
}
class Car extends VehicleDealership {
    constructor(vehicleName, vehicleType,brand,_price) {
        super(vehicleName,vehicleType,brand);
        this._price = _price;
    }
    typeofCar() {
        return `Name of car is ${this.vehicleName} it is a  ${this.vehicleType}`;
    }
    carBrand() {
        return `The brand is ${this.vehicleName} ${this.vehicleType}`;
    }
    vehicleDetails(){
      return `Name of car is ${this.vehicleName} it is a  ${this.vehicleType},The brand is ${this.brand} ${this.vehicleName}`;
    }
    
    carPrice(){
    
      return `${this.brand} ${this.vehicleName} is # ${this._price}`;
    }
}


class Motorcycle extends VehicleDealership {

    constructor(vehicleName,vehicleType,brand, _price) {
        super(vehicleName,vehicleType,brand);
        this._price = _price;
    }
    typeofCycle() {
        return `Name of car is ${this.vehicleName} it is a  ${this.vehicleType}`;
    }
    cycleBrand() {
        return `The brand is ${this.vehicleName} ${this.vehicleType}`;
    }
    cycleDetails(){
      return `Name of Motorcycle is ${this.vehicleName} it is a  ${this.vehicleType},The brand is ${this.brand} ${this.vehicleName}`;
    }
    
    cyclePrice(){
    
      return `${this.brand} ${this.vehicleName} is # ${this._price}`;
    }

}



const cycle = new Motorcycle('Okada', "Motorcycle"," Suzuki", 50000);

const car = new Car('Corolla', "Car", "Toyota", 50000);
const vehicle= 



cycle.cycleDetails();
car.vehicleDetails();
car.carPrice();

