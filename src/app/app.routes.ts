import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Forgotpassword } from './pages/forgotpassword/forgotpassword';
import { ContactList } from './pages/contact-list/contact-list';
import { ContactDetails } from './pages/contact-details/contact-details';
import { CreateEditContact } from './pages/create-edit-contact/create-edit-contact';
import { onlyUserGuard, } from './guards/only-user-guard';
import { onlyPublicGuard } from './guards/only-public-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login, //si ponen en el navegador /login , se mostrará el componente Login
    canActivate: [onlyPublicGuard],
  },
  {
    path: 'register',
    component: Register,
    canActivate: [onlyPublicGuard],
  },
  {
    path: 'forgotpassword',
    component: Forgotpassword,
    canActivate: [onlyPublicGuard],
  },
  {
    path: 'contacts', //en plural porque es un array
    component: ContactList,
    canActivate: [onlyUserGuard], //esto es para que solo pueda acceder a esta ruta si está logueado
  },
  {
    path: 'contacts/create',
    component: CreateEditContact, //cambiamos el orden para que primero entre ahi y no se de cuenta que esta el :id después
    canActivate: [onlyUserGuard], //esto es para que solo pueda acceder a esta ruta si está logueado
  },
  {
    path: '/contacts/:id', //crea una variable con id; vincula el valor de la variable y la ruta
    component: ContactDetails,
    canActivate: [onlyUserGuard], //esto es para que solo pueda acceder a esta ruta si está logueado
  },
  {
    path: '/contacts/:id/edit',
    component: CreateEditContact,
    canActivate: [onlyUserGuard],
  },

  {
    path: '',
    redirectTo: 'contacts', //esto es para que cuando el usuario ingrese a la ruta vacía, sea redirigido a la ruta de login
    pathMatch: 'full',
  },
];
