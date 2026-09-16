import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactsService } from '../../services/contactsService';

@Component({
  imports: [RouterLink],
  selector: 'app-contact-list',
  styleUrl: './contact-list.scss',
  templateUrl: './contact-list.html',
})
export class ContactList {
  
contactsService = inject(ContactsService);


}
