import { TestBed } from '@angular/core/testing';

import { AdmissionsService } from './admissions.service';

describe('AdmissionsService', () => {
  let service: AdmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
