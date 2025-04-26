import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  
import { NgIf, NgFor } from '@angular/common';  

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, NgFor],    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {
        
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    login() {
        if (this.loginForm.valid) {
            const { username, password } = this.loginForm.value;
            this.authService.login(username, password).subscribe(
                (response) => {
                    localStorage.setItem('access_token', response.access_token);
                    this.router.navigate(['/dashboard']);
                },
                (error) => {
                    console.error('Login failed', error);
                }
            );
        } else {
            console.error('Form is invalid');
        }
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
