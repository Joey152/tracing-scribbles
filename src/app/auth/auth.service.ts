import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _isAuthenticated: BehaviorSubject<boolean>;
    private _user: ReplaySubject<User>;

    get isAuthenticated() {
        return this._isAuthenticated;
    }

    get user() {
        return this._user;
    }

    constructor() {
        this._isAuthenticated = new BehaviorSubject(false);
        this._user = new ReplaySubject();
    }
}
