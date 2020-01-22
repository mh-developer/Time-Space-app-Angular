import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));

    it('should be created', () => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service).toBeTruthy();
    });

    it('should get data', () => {
        const service: ApiService = TestBed.get(ApiService);
        const result = service.get('');
        expect(result).toBeTruthy();
    });

    it('should put data', () => {
        const service: ApiService = TestBed.get(ApiService);
        const result = service.put('');
        expect(result).toBeTruthy();
    });

    it('should post data', () => {
        const service: ApiService = TestBed.get(ApiService);
        const result = service.post('');
        expect(result).toBeTruthy();
    });

    it('should delete data', () => {
        const service: ApiService = TestBed.get(ApiService);
        const result = service.delete('');
        expect(result).toBeTruthy();
    });
});
