import { Service } from '@angular/core';
import { Contact } from '../interfaces/contact';
import Swal from 'sweetalert2'

@Service()
export class Contacts {

    contactList: Contact[] = [
  {
      id: '1',
    imageUrl: 'images/logo.PNG',
    name: 'John',
    surname: 'Doe',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    direction: 'Calle Principal, Ciudad'
  }];
}

agregarContacto(nuevoContacto: Contact) {
this.contactList.push({

  phone: '123-456-7890', 
  email: 'newcontact@example.com',
  direction: 'Calle Principal, Ciudad' })
  console.log(this.contactList);
  };
