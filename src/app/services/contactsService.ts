import { inject, Service, signal} from '@angular/core';
import { Contact } from '../interfaces/contact';
import { Auth } from './auth';
import { readonly } from '@angular/forms/signals';

@Service()
export class ContactsService {
    authService = inject(Auth);
    readonly contactList = signal<Contact[]>([]);


agregarContacto(nuevoContacto: Contact) {
//const nuevoId = this.contactList.length; 
//this.contactList.push({
//  id: nuevoId,
//  imageUrl: nuevoContacto.imageUrl,
//  name: nuevoContacto.name,
//  surname: nuevoContacto.surname,
//  phone: nuevoContacto.phone, 
//  email: nuevoContacto.email,
//  address: nuevoContacto.address,
//  IsFavorite: false,
// })
//  return nuevoId;
//  console.log(this.contactList)
}

//busca un contacto desde un ID
getContactById(id: number){
//const contactoEncontrado = this.contactList.find(c => c.Id === id);
//return contactoEncontrado;
}
async getContacts(): Promise<Contact[]> {
  const res = await fetch('https://localhost:5000/api/contacts', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + this.authService.token
    },
  })
if (!res.ok) return [];
  const contacts = await res.json()
  this.contactList.set(contacts);
  console.log(this.contactList)
  return contacts;
}


deleteContact(id:number){
 // this.contactList = this.contactList.filter(c => c.Id !== id);
}

editContact(contact:Contact){
   //this.contactList = this.contactList.map(c => {
   // if(c.Id === contact.Id) return contact;
   // return c
  //});
}

}
