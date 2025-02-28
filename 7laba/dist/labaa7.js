// Класс Хранилище
class VehicleStorage {
    constructor() {
        this.vehicles = [];
    }
    // Метод для добавления транспортного средства
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    // Метод для сортировки транспортных средств по Марке (А до Я)
    sortByBrand() {
        return this.vehicles.sort((a, b) => a.brand.localeCompare(b.brand)); // Сортировка по алфавиту
    }
    // Метод для получения всех транспортных средств
    getVehicles() {
        return this.vehicles;
    }
    // Метод для получения всех транспортных средств владельцев с фамилией, совпадающей с параметром
    getVehiclesByOwnerLastName(lastName) {
        return this.vehicles.filter(vehicle => vehicle.ownerLastName.toLowerCase() === lastName.toLowerCase());
    }
}
// Создание экземпляра хранилища
const storage = new VehicleStorage();
// Добавление транспортных средств в хранилище
storage.addVehicle({ brand: "Toyota", model: "Camry", year: 2020, ownerLastName: "Smith" });
storage.addVehicle({ brand: "BMW", model: "X5", year: 2019, ownerLastName: "Johnson" });
storage.addVehicle({ brand: "Audi", model: "A4", year: 2021, ownerLastName: "Smith" });
storage.addVehicle({ brand: "Mercedes", model: "S-Class", year: 2022, ownerLastName: "Williams" });
// Поиск транспортных средств владельцев с фамилией "Smith" (без учета регистра)
const smithVehicles = storage.getVehiclesByOwnerLastName("smith");
// Вывод найденных транспортных средств
console.log(smithVehicles);
