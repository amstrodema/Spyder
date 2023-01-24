/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfessionServiceService } from './confessionService.service';

describe('Service: ConfessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfessionServiceService]
    });
  });

  it('should ...', inject([ConfessionServiceService], (service: ConfessionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
