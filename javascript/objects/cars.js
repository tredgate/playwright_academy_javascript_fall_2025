import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint("Červená", "1.6TDI", "Diesel", "Ropák");
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();
dieselCar.logCarProperties();
