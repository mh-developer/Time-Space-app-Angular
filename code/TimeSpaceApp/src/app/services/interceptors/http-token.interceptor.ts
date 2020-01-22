import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SettingsService } from '../settings';

@Injectable({
    providedIn: 'root'
})
export class HttpTokenInterceptor implements HttpInterceptor {

    constructor(
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
        return next.handle(request);
    }
}
