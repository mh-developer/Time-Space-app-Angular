import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService } from '../settings';

@Injectable({
    providedIn: 'root'
})
export class TokenGuard implements CanActivate {

    constructor(
        private router: Router,
        private settingsService: SettingsService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (state.url !== '/settings' && !this.settingsService.getToken()) {
            this.router.navigate(['/settings']);
            return false;
        }

        return true;
    }

}
