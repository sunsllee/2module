import { Transport } from './labaa4';

const owner = new Transport.OwnerClass('Сидорова', 'Анна', 'Олеговна', new Date(2000, 3, 13), Transport.DocumentType.Passport, 'AB', '123456');

const car = new Transport.CarClassImpl('Toyota', 'Camry', 2022, 'JTM1234567890ABCDE', 'A123BC', owner, Transport.CarBodyType.SEDAN, Transport.CarClass.LUXURY);

const carStorage = new Transport.VehicleStorageImpl<Transport.Car>();
carStorage.addVehicle(car);

console.log('All vehicles in car storage:');
carStorage.getAllVehicles().forEach(vehicle => vehicle.displayVehicleInfo());

const motorbike = new Transport.MotorbikeClassImpl('Yamaha', 'YZF-R1', 2023, 'YZF1234567890ABCDE', 'B123CD', owner, Transport.MotorbikeFrameType.CARBON, true);

const motorbikeStorage = new Transport.VehicleStorageImpl<Transport.Motorbike>();
motorbikeStorage.addVehicle(motorbike);

console.log('All vehicles in motorbike storage:');
motorbikeStorage.getAllVehicles().forEach(vehicle => vehicle.displayVehicleInfo());
