// Класс Хранилище
var VehicleStorage = /** @class */ (function () {
    function VehicleStorage() {
        this.vehicles = [];
    }
    // Метод для добавления транспортного средства
    VehicleStorage.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    // Метод для сортировки транспортных средств по Марке (А до Я)
    VehicleStorage.prototype.sortByBrand = function () {
        return this.vehicles.sort(function (a, b) { return a.brand.localeCompare(b.brand); }); // Сортировка по алфавиту
    };
    // Метод для получения всех транспортных средств
    VehicleStorage.prototype.getVehicles = function () {
        return this.vehicles;
    };
    // Метод для получения всех транспортных средств владельцев с фамилией, совпадающей с параметром
    VehicleStorage.prototype.getVehiclesByOwnerLastName = function (lastName) {
        return this.vehicles.filter(function (vehicle) {
            return vehicle.ownerLastName.toLowerCase() === lastName.toLowerCase();
        });
    };
    return VehicleStorage;
}());
// Создание экземпляра хранилища
var storage = new VehicleStorage();
// Добавление транспортных средств в хранилище
storage.addVehicle({ brand: "Toyota", model: "Camry", year: 2020, ownerLastName: "Smith" });
storage.addVehicle({ brand: "BMW", model: "X5", year: 2019, ownerLastName: "Johnson" });
storage.addVehicle({ brand: "Audi", model: "A4", year: 2021, ownerLastName: "Smith" });
storage.addVehicle({ brand: "Mercedes", model: "S-Class", year: 2022, ownerLastName: "Williams" });
// Поиск транспортных средств владельцев с фамилией "Smith" (без учета регистра)
var smithVehicles = storage.getVehiclesByOwnerLastName("smith");
// Вывод найденных транспортных средств
console.log(smithVehicles);
