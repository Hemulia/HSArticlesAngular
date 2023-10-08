import { TestBed } from '@angular/core/testing';

import { RefreshStatusService } from './refresh-status.service';

describe('RefreshStatusService', () => {
  let service: RefreshStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
