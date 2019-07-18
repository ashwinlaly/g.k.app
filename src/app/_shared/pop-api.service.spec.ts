import { TestBed } from '@angular/core/testing';

import { PopApiService } from './pop-api.service';

describe('PopApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopApiService = TestBed.get(PopApiService);
    expect(service).toBeTruthy();
  });
});
