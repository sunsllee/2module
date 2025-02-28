"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let DocumentType;
    (function (DocumentType) {
        DocumentType["Passport"] = "Passport";
        DocumentType["DriverLicense"] = "Driver License";
        DocumentType["IDCard"] = "ID Card";
    })(DocumentType = Transport.DocumentType || (Transport.DocumentType = {}));
    class OwnerClass {
        constructor(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.middleName = middleName;
            this.birthDate = birthDate;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
        displayOwnerInfo() {
            console.log('Owner Information:');
            console.log(`Full Name: ${this.lastName} ${this.firstName} ${this.middleName}`);
            console.log(`Date of Birth: ${this.birthDate.toLocaleDateString()}`);
            console.log(`Document: ${this.documentType}, Series: ${this.documentSeries}, Number: ${this.documentNumber}`);
        }
    }
    Transport.OwnerClass = OwnerClass;
    class VehicleClass {
        constructor(brand, model, year, vin, registrationNumber, owner) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
        displayVehicleInfo() {
            console.log('Vehicle Information:');
            console.log(`Brand: ${this.brand}`);
            console.log(`Model: ${this.model}`);
            console.log(`Year: ${this.year}`);
            console.log(`VIN: ${this.vin}`);
            console.log(`Registration Number: ${this.registrationNumber}`);
        }
    }
    Transport.VehicleClass = VehicleClass;
    let CarBodyType;
    (function (CarBodyType) {
        CarBodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
        CarBodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        CarBodyType["COUPE"] = "\u041A\u0443\u043F\u0435";
        CarBodyType["CONVERTIBLE"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
        CarBodyType["SUV"] = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440";
    })(CarBodyType = Transport.CarBodyType || (Transport.CarBodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["ECONOMY"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["MIDDLE"] = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439";
        CarClass["LUXURY"] = "\u041B\u044E\u043A\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    class CarClassImpl {
        constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
        displayVehicleInfo() {
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
    Transport.CarClassImpl = CarClassImpl;
    let MotorbikeFrameType;
    (function (MotorbikeFrameType) {
        MotorbikeFrameType["STEEL"] = "\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F";
        MotorbikeFrameType["ALUMINUM"] = "\u0410\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u0430\u044F";
        MotorbikeFrameType["CARBON"] = "\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F";
    })(MotorbikeFrameType = Transport.MotorbikeFrameType || (Transport.MotorbikeFrameType = {}));
    class MotorbikeClassImpl {
        constructor(brand, model, year, vin, registrationNumber, owner, frameType, isForSports) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.frameType = frameType;
            this.isForSports = isForSports;
        }
        displayVehicleInfo() {
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
    Transport.MotorbikeClassImpl = MotorbikeClassImpl;
    class VehicleStorageImpl {
        constructor() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        getAllVehicles() {
            return this.vehicles;
        }
        addVehicle(vehicle) {
            this.vehicles.push(vehicle);
        }
    }
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
