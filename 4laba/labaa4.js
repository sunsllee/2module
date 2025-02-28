"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    var DocumentType;
    (function (DocumentType) {
        DocumentType["Passport"] = "Passport";
        DocumentType["DriverLicense"] = "Driver License";
        DocumentType["IDCard"] = "ID Card";
    })(DocumentType = Transport.DocumentType || (Transport.DocumentType = {}));
    var OwnerClass = /** @class */ (function () {
        function OwnerClass(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.middleName = middleName;
            this.birthDate = birthDate;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
        OwnerClass.prototype.displayOwnerInfo = function () {
            console.log('Owner Information:');
            console.log("Full Name: ".concat(this.lastName, " ").concat(this.firstName, " ").concat(this.middleName));
            console.log("Date of Birth: ".concat(this.birthDate.toLocaleDateString()));
            console.log("Document: ".concat(this.documentType, ", Series: ").concat(this.documentSeries, ", Number: ").concat(this.documentNumber));
        };
        return OwnerClass;
    }());
    Transport.OwnerClass = OwnerClass;
    var VehicleClass = /** @class */ (function () {
        function VehicleClass(brand, model, year, vin, registrationNumber, owner) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
        VehicleClass.prototype.displayVehicleInfo = function () {
            console.log('Vehicle Information:');
            console.log("Brand: ".concat(this.brand));
            console.log("Model: ".concat(this.model));
            console.log("Year: ".concat(this.year));
            console.log("VIN: ".concat(this.vin));
            console.log("Registration Number: ".concat(this.registrationNumber));
        };
        return VehicleClass;
    }());
    Transport.VehicleClass = VehicleClass;
    var CarBodyType;
    (function (CarBodyType) {
        CarBodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
        CarBodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        CarBodyType["COUPE"] = "\u041A\u0443\u043F\u0435";
        CarBodyType["CONVERTIBLE"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
        CarBodyType["SUV"] = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440";
    })(CarBodyType = Transport.CarBodyType || (Transport.CarBodyType = {}));
    var CarClass;
    (function (CarClass) {
        CarClass["ECONOMY"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["MIDDLE"] = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439";
        CarClass["LUXURY"] = "\u041B\u044E\u043A\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    var CarClassImpl = /** @class */ (function () {
        function CarClassImpl(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
        CarClassImpl.prototype.displayVehicleInfo = function () {
            console.log('Vehicle Information:');
            console.log("Brand: ".concat(this.brand));
            console.log("Model: ".concat(this.model));
            console.log("Year: ".concat(this.year));
            console.log("VIN: ".concat(this.vin));
            console.log("Registration Number: ".concat(this.registrationNumber));
            console.log("Body Type: ".concat(this.bodyType));
            console.log("Car Class: ".concat(this.carClass));
        };
        return CarClassImpl;
    }());
    Transport.CarClassImpl = CarClassImpl;
    var MotorbikeFrameType;
    (function (MotorbikeFrameType) {
        MotorbikeFrameType["STEEL"] = "\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F";
        MotorbikeFrameType["ALUMINUM"] = "\u0410\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u0430\u044F";
        MotorbikeFrameType["CARBON"] = "\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u0430\u044F";
    })(MotorbikeFrameType = Transport.MotorbikeFrameType || (Transport.MotorbikeFrameType = {}));
    var MotorbikeClassImpl = /** @class */ (function () {
        function MotorbikeClassImpl(brand, model, year, vin, registrationNumber, owner, frameType, isForSports) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.frameType = frameType;
            this.isForSports = isForSports;
        }
        MotorbikeClassImpl.prototype.displayVehicleInfo = function () {
            console.log('Vehicle Information:');
            console.log("Brand: ".concat(this.brand));
            console.log("Model: ".concat(this.model));
            console.log("Year: ".concat(this.year));
            console.log("VIN: ".concat(this.vin));
            console.log("Registration Number: ".concat(this.registrationNumber));
            console.log("Frame Type: ".concat(this.frameType));
            console.log("For Sports: ".concat(this.isForSports ? 'Yes' : 'No'));
        };
        return MotorbikeClassImpl;
    }());
    Transport.MotorbikeClassImpl = MotorbikeClassImpl;
    var VehicleStorageImpl = /** @class */ (function () {
        function VehicleStorageImpl() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        VehicleStorageImpl.prototype.getAllVehicles = function () {
            return this.vehicles;
        };
        VehicleStorageImpl.prototype.addVehicle = function (vehicle) {
            this.vehicles.push(vehicle);
        };
        return VehicleStorageImpl;
    }());
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
