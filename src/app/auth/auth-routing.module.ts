import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

const authRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full'}
        ]
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
