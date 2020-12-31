import { TestBed } from '@angular/core/testing';

import { OrganogramService } from './organogram.service';

describe('OrganogramService', () => {
  let service: OrganogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
