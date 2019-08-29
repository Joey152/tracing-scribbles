import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
