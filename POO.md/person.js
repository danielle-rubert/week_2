export class Persona {
    constructor(nombre, anyoNacimiento, altura, peso) {
      this.nombre = nombre;
      this.anyoNacimiento = anyoNacimiento; 
      this.altura = altura; 
      this.peso = peso; 
    }

    calcularIMC() {
        return (this.peso / (this.altura ** 2)).toFixed(2); 
      }

      mostrarIMC() {
        console.log(`${this.nombre}, su IMC es: ${this.calcularIMC()}`);
      }

      calcularEdad(anioActual) {
        return anioActual - this.anyoNacimiento;
      }

      mostrarEdad(anioActual) {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.calcularEdad(anioActual)} años}`);
      }

      printAll(anioActual) {
        const atributos = {
          Nombre: this.nombre,
          "Año de Nacimiento": this.anyoNacimiento,
          Altura: this.altura + "m",
          Peso: this.peso + "kg",
          Edad: this.calcularEdad(anioActual) + " años",
          IMC: this.calcularIMC(),
        };
    
        for (const key in atributos) {
          console.log(`${key} - ${atributos[key]}`);
        }
        console.log("----------------------");
    }
}

const persona1 = new Persona("Dani", 1996, 1.56, 59,);
const persona2 = new Persona("Chris", 1999, 1.80, 90);
const persona3 = new Persona("Ana", 1989, 1.67, 60);

const anioActual = new Date().getFullYear();

persona1.printAll(anioActual);
persona2.printAll(anioActual);
persona3.printAll(anioActual);