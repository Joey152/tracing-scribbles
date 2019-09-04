import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModuleRouteService } from 'src/app/common/module-route.service';
import { RegisterService } from './register.service';

@Component({
    selector: 'trsc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

    registerForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        country: ['', Validators.required]
    });

    constructor(
        private fb: FormBuilder,
        private registerService: RegisterService,
        public moduleRouteService: ModuleRouteService
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        let user = this.registerForm.value;
        delete user.passwordConfirm;
        console.log(user);
        this.registerService.register(user);
    }
}
