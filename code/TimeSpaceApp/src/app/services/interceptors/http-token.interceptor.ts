import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SettingsService } from '../settings';

@Injectable({
    providedIn: 'root'
})
export class HttpTokenInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private settingsService: SettingsService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const token = this.settingsService.getToken();

        if (token) {
            headersConfig['Authorization'] = `SpicaToken ${token}`;
        }

        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request).pipe(tap(() => { },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status !== 401) {
                        return;
                    }
                    this.router.navigate(['settings']);
                }
            }));
    }
}
