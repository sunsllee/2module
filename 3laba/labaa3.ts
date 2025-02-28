export enum DocumentType { 
    Passport = 'Passport',
    DriverLicense = 'Driver License',
    IDCard = 'ID Card'
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

    constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, 
                documentType: DocumentType, documentSeries: string, documentNumber: string) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }

    displayOwnerInfo(): void {
        console.log('Owner Information:');
        console.log(`Full Name: ${this.lastName} ${this.firstName} ${this.middleName}`);
        console.log(`Date of Birth: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Document: ${this.documentType}, Series: ${this.documentSeries}, Number: ${this.documentNumber}`);
    }
}

class VehicleClass implements Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;

    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }

    displayVehicleInfo(): void {
        console.log('Vehicle Information:');
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Registration Number: ${this.registrationNumber}`);
    }
}

enum CarBodyType {
    SEDAN = 'Седан',
    HATCHBACK = 'Хэтчбек',
    COUPE = 'Купе',
    CONVERTIBLE = 'Кабриолет',
    SUV = 'Кроссовер'
}

enum CarClass {
    ECONOMY = 'Эконом',
    MIDDLE = 'Средний',
    LUXURY = 'Люкс'
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

    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarBodyType, carClass: CarClass) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
        this.bodyType = bodyType;
        this.carClass = carClass;
    }

    displayVehicleInfo(): void {
        console.log('Vehicle Information:');
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Registration Number: ${this.registrationNumber}`);
        console.log(`Body Type: ${this.bodyType}`);
        console.log(`Car Class: ${this.carClass}`);
    }
}

enum MotorbikeFrameType {
    STEEL = 'Стальная',
    ALUMINUM = 'Алюминиевая',
    CARBON = 'Карбоновая'
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

    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: MotorbikeFrameType, isForSports: boolean) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
        this.frameType = frameType;
        this.isForSports = isForSports;
    }

    displayVehicleInfo(): void {
        console.log('Vehicle Information:');
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Registration Number: ${this.registrationNumber}`);
        console.log(`Frame Type: ${this.frameType}`);
        console.log(`For Sports: ${this.isForSports ? 'Yes' : 'No'}`);
    }
}

interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];

    getAllVehicles(): T[];
}

class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];

    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }

    getAllVehicles(): T[] {
        return this.vehicles;
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }
}

const owner: Owner = new OwnerClass('Сидорова', 'Анна', 'Олеговна', new Date(2000, 3, 13), DocumentType.Passport, 'AB', '123456');
const vehicle: Vehicle = new VehicleClass('Toyota', 'Camry', 2020, 'JTM1234567890ABCDE', 'A123BC', owner);

const carStorage = new VehicleStorageImpl<Car>();
const car = new CarClassImpl('Toyota', 'Camry', 2022, 'JTM1234567890ABCDE', 'A123BC', owner, CarBodyType.SEDAN, CarClass.LUXURY);
carStorage.addVehicle(car);

const motorbikeStorage = new VehicleStorageImpl<Motorbike>();
const motorbike = new MotorbikeClassImpl('Yamaha', 'YZF-R1', 2023, 'YZF1234567890ABCDE', 'B123CD', owner, MotorbikeFrameType.CARBON, true);
motorbikeStorage.addVehicle(motorbike);


console.log('All vehicles in car storage:');
carStorage.getAllVehicles().forEach(vehicle => vehicle.displayVehicleInfo());

console.log('All vehicles in motorbike storage:');
motorbikeStorage.getAllVehicles().forEach(vehicle => vehicle.displayVehicleInfo());
