import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, minLength, required, validate } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { RegisterForm } from '../../interfaces/register';
@Component({
  imports: [RouterLink, FormField],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {
  authService = inject(Auth);

  router = inject(Router)

  registerModel = signal<RegisterForm>({
    email: "",
    password: "",
    confirmPassword: "",
    imgUrl: "",
    name: "",
    surname: "",
    address: "",
    phone: "",
  });

  formRegister = form(this.registerModel, (schemaPath) => {
    required(schemaPath.email);
    email(schemaPath.email);
    required(schemaPath.password);
    minLength(schemaPath.password, 8);
    required(schemaPath.confirmPassword);
    validate(schemaPath.confirmPassword, ({ value }) => {
      if (value() === this.registerModel().password) return null;
      return { kind: "passwordMatch", message: 'Las contraseñas deben coincidir' }
    })
    required(schemaPath.imgUrl);
    required(schemaPath.name);
    required(schemaPath.surname);
    required(schemaPath.address);
    required(schemaPath.phone);
  });
  async register(event: Event) {
    event.preventDefault();
    console.log(this.registerModel())
    const result = await this.authService.register(this.registerModel());
    if (result) {
      this.router.navigate(['/login']);
    } else {
      console.warn("ERROR")
    }
  }
} 