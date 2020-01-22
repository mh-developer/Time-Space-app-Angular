import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PresenceService } from './presence.service';

describe('PresenceService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));

    it('should be created', () => {
        const service: PresenceService = TestBed.get(PresenceService);
        expect(service).toBeTruthy();
    });

    it('should get all presense employees', () => {
        const service: PresenceService = TestBed.get(PresenceService);
        const result = service.get('2019-12-27T13:25:16', 10000083);
        expect(result).toBeTruthy();
    });
});
