import { Contacts } from "./contacts";
import { Person } from "./Person";

const persona1 = new Person("Nacho", 30, "calle Villalba");
const persona2 = new Person("Dani", 28, "calle Horizonte");

const contactos = new Contacts();
contactos.añadirPersona(persona1);
contactos.añadirPersona(persona2);

console.log(contactos.printCalendar());