import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Forgotpassword } from './pages/forgotpassword/forgotpassword';
import { ContactList } from './pages/contact-list/contact-list';
import { ContactDetails } from './pages/contact-details/contact-details';
import { CreateEditContact } from './pages/create-edit-contact/create-edit-contact';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'login',
        component: Login //si ponen en el navegador /login , se mostrará el componente Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'forgotpassword',
        component: Forgotpassword
    },
    {
        path:'contacts', //en plural porque es un array
        component: ContactList
    },
    {
        path:'contacts/create',
        component: CreateEditContact //cambiamos el orden para que primero entre ahi y no se de cuenta que esta el :id después
    },
     {
        path:'/contacts/:id',
        component: ContactDetails
    },
       {
        path:'/contacts/:id/edit',
        component: CreateEditContact
    },
     
    {
        path: "", 
        redirectTo: "contacts",//esto es para que cuando el usuario ingrese a la ruta vacía, sea redirigido a la ruta de login
       
    }
];
