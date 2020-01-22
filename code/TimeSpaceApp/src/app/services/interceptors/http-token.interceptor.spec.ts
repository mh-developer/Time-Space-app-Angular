import { TestBed } from '@angular/core/testing';
import { HttpTokenInterceptor } from './http-token.interceptor';
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpToken', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            RouterTestingModule
        ]
    }));

    it('should be created', () => {
        const service: HttpTokenInterceptor = TestBed.get(HttpTokenInterceptor);
        expect(service).toBeTruthy();
    });
});
