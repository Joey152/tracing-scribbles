import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _isAuthenticated: BehaviorSubject<boolean>;

    get isAuthenticated() {
        return this._isAuthenticated;
    }

    constructor() {
        this._isAuthenticated = new BehaviorSubject(false);
    }
}
