import { TestBed } from '@angular/core/testing';
import { HttpTokenInterceptor } from './http-token.interceptor';

describe('HttpToken', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: HttpTokenInterceptor = TestBed.get(HttpTokenInterceptor);
        expect(service).toBeTruthy();
    });
});
