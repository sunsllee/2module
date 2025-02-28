interface Vehicle {
    brand: string;
    model: string;
    year: number;
    ownerLastName: string;
}
declare class VehicleStorage {
    private vehicles;
    addVehicle(vehicle: Vehicle): void;
    sortByBrand(): Vehicle[];
    getVehicles(): Vehicle[];
    getVehiclesByOwnerLastName(lastName: string): Vehicle[];
}
declare const storage: VehicleStorage;
declare const smithVehicles: Vehicle[];
