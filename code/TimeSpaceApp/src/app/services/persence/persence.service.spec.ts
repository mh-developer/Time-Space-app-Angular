import { TestBed } from '@angular/core/testing';

import { PersenceService } from './persence.service';

describe('PersenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersenceService = TestBed.get(PersenceService);
    expect(service).toBeTruthy();
  });
});
