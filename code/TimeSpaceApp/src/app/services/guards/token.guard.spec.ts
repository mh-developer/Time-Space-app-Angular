import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TokenGuard } from './token.guard';

describe('TokenGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TokenGuard
            ],
            imports: [
                RouterTestingModule
            ]
        });
    });

    it('should ...', inject([TokenGuard], (guard: TokenGuard) => {
        expect(guard).toBeTruthy();
    }));
});
