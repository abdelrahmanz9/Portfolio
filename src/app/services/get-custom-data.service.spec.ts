import { TestBed } from '@angular/core/testing';

import { GetCustomDataService } from './get-custom-data.service';

describe('GetCustomDataService', () => {
  let service: GetCustomDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCustomDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
