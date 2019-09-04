import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, takeLast, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authState: AuthService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        console.log('action');
        return this.authState.isAuthenticated.pipe(
            map(
                data => {
                    if (data) {
                        return true;
                    }

                    return this.router.parseUrl('/login');
                }
            )
        );
    }
    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return of(false);
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        return this.authState.isAuthenticated.pipe(
            take(1),
            tap(
                data => {
                    if (!data) {
                        // TODO: how to dynamically generate this
                        this.router.navigate(['/account/login']);
                    }
                }
            )
        );
    }
}
