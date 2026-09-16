import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact-details',
  styleUrl: './contact-details.scss',
  templateUrl: './contact-details.html',
})
export class ContactDetails {
  id = input();
}
