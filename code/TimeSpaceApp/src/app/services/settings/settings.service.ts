import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    constructor() { }

    getToken(): string {
        return window.localStorage['SpicaToken'];
    }

    saveToken(token: string): void {
        window.localStorage['SpicaToken'] = token;
    }

    destroyToken(): void {
        window.localStorage.removeItem('SpicaToken');
    }
}
