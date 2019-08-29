import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'trsc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [{ provide: LoginService, useClass: LoginService }]
})
export class LoginComponent implements OnInit, OnDestroy {

    loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    authSubscription: Subscription;

    constructor(
        private loginService: LoginService,
        private fb: FormBuilder,
        private authState: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authSubscription = this.authState.isAuthenticated.subscribe((data) => {
            if (data) {
                this.router.navigate(['/home']);
            }
        });
    }

    onSubmit() {
        this.loginService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}
