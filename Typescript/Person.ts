export class Person {
    public name: string;
    public age: number;
    private address: string;
  
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    printName(): void {
      console.log(this.name);
    }
  
    yearOfBirth(currentYear: number): number {
      return currentYear - this.age;
    }

     getAddress(): string {
      return this.address;
    }
  
    setAddress(address: string): void {
      this.address = address;
    }
  
  }
  

  //const person = new Person("Pepe", 30, "Calle Alameda 40");
  //person.printName();
  //console.log(person.yearOfBirth(2025)); 
  //person.setAddress("Calle Nueva 245");
  //console.log(person.getAddress()); 
  