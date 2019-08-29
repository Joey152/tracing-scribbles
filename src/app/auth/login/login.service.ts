import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginService {

    constructor(public authState: AuthService) { }

    login(username: string, password: string): void {
        this.authState.isAuthenticated.next(username === password);
    }
}
