import { Service } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Service()
export class ContactsService {

    contactList: Contact[] = [
    {
        id: '1',
        imageUrl: 'images/logo.PNG',
        name: 'John',
        surname: 'Doe',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
        direction: 'Calle Principal, Ciudad'
    }
]

agregarContacto(nuevoContacto: Contact) {
const nuevoId = this.contactList.length.toString(); 
this.contactList.push({

  id: nuevoId,
  imageUrl: nuevoContacto.imageUrl,
  name: nuevoContacto.name,
  surname: nuevoContacto.surname,
  phone: nuevoContacto.phone, 
  email: nuevoContacto.email,
  direction: nuevoContacto.direction
 })
  return nuevoId;
  console.log(this.contactList)
}

//Busca un contacto desde un ID y devuelve el contacto encontrado
getContactById(id: string){
  const contactoEncontrado = this.contactList.find(contact => contact.id === id);
  return contactoEncontrado;
}

deleteContact(id:string){
  this.contactList = this.contactList.filter(c => c.id !== id);
}

editContact(contact:Contact){
  this.contactList = this.contactList.map(c => {
    if(c.id === contact.id) return contact;
    return c
  });
}
}