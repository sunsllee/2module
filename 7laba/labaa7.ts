interface Vehicle {
    brand: string;  
    model: string; 
    year: number;   
    ownerLastName: string;  
  }
  

  class VehicleStorage {
    private vehicles: Vehicle[] = [];
    addVehicle(vehicle: Vehicle): void {
      this.vehicles.push(vehicle);
    }

    sortByBrand(): Vehicle[] {
      return this.vehicles.sort((a, b) => a.brand.localeCompare(b.brand)); 
    }
    getVehicles(): Vehicle[] {
      return this.vehicles;
    }
    getVehiclesByOwnerLastName(lastName: string): Vehicle[] {
      return this.vehicles.filter(vehicle =>
        vehicle.ownerLastName.toLowerCase() === lastName.toLowerCase()
      );
    }
  }
  
const storage = new VehicleStorage();
storage.addVehicle({ brand: "Toyota", model: "Camry", year: 2020, ownerLastName: "Smith" });
storage.addVehicle({ brand: "BMW", model: "X5", year: 2019, ownerLastName: "Johnson" });
storage.addVehicle({ brand: "Audi", model: "A4", year: 2021, ownerLastName: "Smith" });
storage.addVehicle({ brand: "Mercedes", model: "S-Class", year: 2022, ownerLastName: "Williams" }); 
const smithVehicles = storage.getVehiclesByOwnerLastName("smith");
console.log(smithVehicles);
  