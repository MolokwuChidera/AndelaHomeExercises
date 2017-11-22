class VehicleDealership {// Creation of class
 
  constructor(vehicleName,numberAvailable){
    this.vehicleName = vehicleName;//use of variables
    this.numberAvailable = numberAvailable;
    
    
  }
 
 getvehicleName(){
  
 return this.vehicleName;
   
  }
  
  getnumberAvailable(){
    
    return this.numberAvailable;
  }
  
  getvehicleDetails(vehicleName,numberAvailable) {
     return `${this.vehicleName} ${this.numberAvailable}`;
  }
  
 
  
}

class Car extends VehicleDealership { //Example of inheritance
  constructor(vehicleBrand, vehicleName,vehicleType) {
    super(vehicleBrand, vehicleName);
    
  }
getvehicleType(){

  return this.vehicleType;
}
  getCar(vehicle) {
    return this.VehicleName + " is a car";
    
  }
  
  getavailableNumber(){
    return "Number available is "+this.numberAvailable;
  }
  
}
let r=new VehicleDealership('Toyota',2);
r.getvehicleType();
r.getavailableNumber();
r.getCar();






