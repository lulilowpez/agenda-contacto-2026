import { Component } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { FormField, form} from '@angular/forms';
import {ContactService} from '../../services/contactsService'
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  imports: [FormField],
  selector: 'app-create-edit-contact',
  styleUrl: './create-edit-contact.scss',
  templateUrl: './create-edit-contact.html',
})
export class CreateEditContact {
  router = inject(Router); //sirve para navegar entre rutas
  contactService = inject(ContactService);

  newContactModel = signal<Contact>(
    {
      id: '',
      imageUrl: '',
      name: '',
      surname: '',
      phone: '',
      email: '',
      direction: ''
    }
  );
  //mostrarForm = effect(() =>console.log(this.newContactModel()));
  formCreateContact = form(this.newContactModel);

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.newContactModel());

    const idContactoCreado = this.contactService.agregarContacto(this.newContactModel());
    //swal alerta de contacto creado
    this.router.navigate(['/contact', idContactoCreado]);
  }
}

