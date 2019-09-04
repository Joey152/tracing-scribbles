import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable()
export class LoginService {

    private readonly endpoint = "http://localhost:8080/tracing-scribbles";

    constructor(
        private authState: AuthService,
        private http: HttpClient
    ) { }

    login(username: string, password: string): void {
        this.http.post<User | null>(`${this.endpoint}/login`, { username: username, password: password })
            .subscribe(
                user => {
                    if (user === null) {
                        this.authState.isAuthenticated.next(false);
                    }
                    else {
                        this.authState.isAuthenticated.next(true);
                        this.authState.user.next(user);
                    }
                }
            );
    }
}
