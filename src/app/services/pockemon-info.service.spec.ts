import { TestBed } from '@angular/core/testing';

import { PockemonInfoService } from './pockemon-info.service';

describe('PockemonInfoService', () => {
  let service: PockemonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PockemonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
