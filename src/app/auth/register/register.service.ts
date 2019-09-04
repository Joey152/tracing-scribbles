import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable()
export class RegisterService {

    private readonly apiEndpoint = 'http://localhost:8080/tracing-scribbles';

    constructor(private http: HttpClient) { }

    register(user: User): void {
        this.http.post(`${this.apiEndpoint}/register`, user)
            .subscribe();
    }
}
