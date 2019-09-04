import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModuleRouteService } from 'src/app/common/module-route.service';

@Component({
    selector: 'trsc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
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
        private router: Router,
        public moduleRouteService: ModuleRouteService
    ) { }

    ngOnInit() {
        this.authSubscription = this.authState.isAuthenticated.subscribe((data) => {
            if (data) {
                // TODO: should this be hardcoded or should it navigate backwards
                this.router.navigate(['/']);
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
