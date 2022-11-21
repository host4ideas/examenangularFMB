import { TestBed } from '@angular/core/testing';

import { CubosServiceService } from './cubos-service.service';

describe('CubosServiceService', () => {
  let service: CubosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
