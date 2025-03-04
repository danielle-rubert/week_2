import { Person } from "./Person";

export class Contacts {
    public people: Person[] = [];
  
    añadirPersona(people: Person) {
      this.people.push(people);
    }
  
    printCalendar(): void {
      this.people.forEach(person => {
        console.log(`Name: ${person.name}, Age: ${person.age}, Address: ${person.getAddress()}`);
      });
    }
  }