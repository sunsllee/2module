export declare namespace Transport {
    enum DocumentType {
        Passport = "Passport",
        DriverLicense = "Driver License",
        IDCard = "ID Card"
    }
    interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        documentType: DocumentType;
        documentSeries: string;
        documentNumber: string;
        displayOwnerInfo(): void;
    }
    interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        displayVehicleInfo(): void;
    }
    class OwnerClass implements Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        documentType: DocumentType;
        documentSeries: string;
        documentNumber: string;
        constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, documentType: DocumentType, documentSeries: string, documentNumber: string);
        displayOwnerInfo(): void;
    }
    class VehicleClass implements Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
        displayVehicleInfo(): void;
    }
    enum CarBodyType {
        SEDAN = "\u0421\u0435\u0434\u0430\u043D",
        HATCHBACK = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
        COUPE = "\u041A\u0443\u043F\u0435",
        CONVERTIBLE = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442",
        SUV = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440"
    }
    enum CarClass {
        ECONOMY = "\u042D\u043A\u043E\u043D\u043E\u043C",
        MIDDLE = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439",
        LUXURY = "\u041B\u044E\u043A\u0441"
    }
    interface Car extends Vehicle {
        bodyType: CarBodyType;
        carClass: CarClass;
    }
    class CarClassImpl implements Car {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        bodyType: CarBodyType;
        carClass: CarClass;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarBodyType, carClass: CarClass);
        displayVehicleInfo(): void;
    }
    enum MotorbikeFrameType {
        STEEL = "\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F",
        ALUMINUM = "\u0410\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u0430\u044F",
        CARBON = "\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F"
    }
    interface Motorbike extends Vehicle {
        frameType: MotorbikeFrameType;
        isForSports: boolean;
    }
    class MotorbikeClassImpl implements Motorbike {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        frameType: MotorbikeFrameType;
        isForSports: boolean;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: MotorbikeFrameType, isForSports: boolean);
        displayVehicleInfo(): void;
    }
    interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }
    class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        creationDate: Date;
        vehicles: T[];
        constructor();
        getAllVehicles(): T[];
        addVehicle(vehicle: T): void;
    }
}
