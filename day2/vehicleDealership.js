class VehicleDealership {// Creation of class
 
  constructor(vehicleName,numberAvailable){
    this.vehicleName = vehicleName;//use of variables
    this.numberAvailable = numberAvailable;
    
    
  }
 
 setvehicleAvailable(vehicleAvailable){
  
 this.vehicleAvailable=vehicleAvailable;
   
  }
  
  getvehicleAvailable(){
    
    return this.vehicleAvailable;
  }
  
  getvehicleDetails(vehicleName,numberAvailable) {
     return `${this.vehicleName} ${this.numberAvailable}`;
  }
  
 
  
}

class Car extends VehicleDealership { //Example of inheritance
  constructor(vehicleBrand, vehicleName) {
    super(vehicleBrand, vehicleName);
    this._namesVehicles = [];
  }

  addcar(vehicle) {
    this._namesVehicles.push(vehicle);
    
  }
  
}
let r=new VehicleDealership('Toyota',2);
 console.log(r.getvehicleDetails());





