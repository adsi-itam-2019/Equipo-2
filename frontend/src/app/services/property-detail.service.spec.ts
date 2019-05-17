import { TestBed } from '@angular/core/testing';

import { PropertyDetailService } from './property-detail.service';

describe('PropertyDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyDetailService = TestBed.get(PropertyDetailService);
    expect(service).toBeTruthy();
  });
});
