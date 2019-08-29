import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'trsc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm = this.fb.group({
        username: [''],
        password: [''],
        passwordConfirm: [''],
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

}
