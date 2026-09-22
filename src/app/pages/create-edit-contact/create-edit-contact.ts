import { Component, inject, signal, OnInit, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { FormField, form} from '@angular/forms/signals';
import {ContactsService} from '../../services/contactsService'
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
//import { effect } from '@angular/core';
@Component({
  imports: [FormField],
  selector: 'app-create-edit-contact',
  styleUrl: './create-edit-contact.scss',
  templateUrl: './create-edit-contact.html',
})
export class CreateEditContact implements OnInit {
  
  ngOnInit(): void {
    if(this.id()){
      const contacto = this.contactsService.getContactById(this.id()!);
      if(contacto){
        this.newContactModel.set(contacto);
      }
    }
  }
  contactsService = inject(ContactsService);
  router = inject(Router)//sirve para navegar entre rutas

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
  id =input<string>();
  //mostrarForm = effect(() =>console.log(this.newContactModel()))
  formCreateContact = form(this.newContactModel);

  onSubmit(event: Event) {
    event.preventDefault();

 //Editar
    if(this.id()){
      this.editarContacto()
    } else {
      this.crearContacto()
    }
    
  }

  crearContacto(){

    const idContactoCreado = this.contactsService.agregarContacto(this.newContactModel());
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      theme: 'dark',
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "success",
      title: "Contacto creado"
    });

    this.router.navigate(['/contacts', idContactoCreado]);
  }

editarContacto() {
  this.contactsService.editContact(this.newContactModel())

  Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      theme: 'dark',
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "success",
      title: "Contacto editado"
    });
this.router.navigate(['/contacts', this.newContactModel().id]);
}
}
