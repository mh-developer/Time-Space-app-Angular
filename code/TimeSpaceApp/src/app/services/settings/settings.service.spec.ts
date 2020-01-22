import { TestBed, getTestBed } from '@angular/core/testing';
import { SettingsService } from './settings.service';

describe('SettingsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SettingsService = TestBed.get(SettingsService);
        expect(service).toBeTruthy();
    });

    it(`should save token`, () => {
        const service: SettingsService = TestBed.get(SettingsService);
        const testToken = '1231asdfasdf12j2k13jjk23k1j2';
        service.saveToken(testToken);

        const token = service.getToken();
        expect(token).toEqual(testToken);
    });

    it('should get token', () => {
        const service: SettingsService = TestBed.get(SettingsService);
        const testToken = '1231asdfasdf12j2k13jjk23k1j2';
        service.saveToken(testToken);
        const token = service.getToken();

        expect(token).toEqual(testToken);
    });

    it('should delete token', () => {
        const service: SettingsService = TestBed.get(SettingsService);
        const testToken = '1231asdfasdf12j2k13jjk23k1j2';
        service.saveToken(testToken);

        let token = service.getToken();
        expect(token).toEqual(testToken);

        service.destroyToken();
        token = service.getToken();
        expect(token).toBeFalsy();
    });
});
