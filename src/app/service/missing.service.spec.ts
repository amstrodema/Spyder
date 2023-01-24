/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MissingService } from './missing.service';

describe('Service: Missing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissingService]
    });
  });

  it('should ...', inject([MissingService], (service: MissingService) => {
    expect(service).toBeTruthy();
  }));
});
