import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';

const authRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        outlet: 'splash'
    },
    {
        path: 'register',
        component: RegisterComponent,
        outlet: 'splash'
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
