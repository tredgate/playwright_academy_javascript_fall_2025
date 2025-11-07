// javascript/objects/
// cars.js
export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4; // ? Hardocodovaná property - někdy Magic number
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel}\n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logCarProperties() {
    console.log(
      `Informace o autě: ${this.carName}: \n\t motor: ${this.engine}, palivo: ${this.fuel}, barva: ${this.color}, počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logDivider() {
    console.log("-----------------------------");
  }

  repaint(newColor) {
    const oldColor = this.color;
    this.color = newColor;
    console.log(
      `Auto "${this.carName} bylo přebarveno z ${oldColor} na ${this.color}"`
    );
    this.logDivider();
  }

  getEngine() {
    return this.engine; // ? Return vrací hodnotu jako výsledek metody/funkce
    // ! za příkazem return se již neprovádí žádné příkazy (je to finální krok funkce/metody)
    console.log("Toto se již nevypíše");
  }
}
