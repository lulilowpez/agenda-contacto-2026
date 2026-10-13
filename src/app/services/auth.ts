import { inject, Service } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../interfaces/login';

@Service()
export class Auth {
    token = localStorage.getItem('token') || '';
    router = inject(Router);

    async login(loginData: LoginForm):Promise<boolean>{
        const res = await fetch('https://localhost:5000/api/authentication/authenticate', 
            {method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        email: loginData.email,
                        password: loginData.password
                    }
                )
            })
        if (!res.ok) return false;
        const token = await res.text();
        localStorage.setItem('token', token);
        this.token = token;
    }
register(){}

    logout(){
        this.token = '';
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}