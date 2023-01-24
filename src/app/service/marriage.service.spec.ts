/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarriageService } from './marriage.service';

describe('Service: Marriage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarriageService]
    });
  });

  it('should ...', inject([MarriageService], (service: MarriageService) => {
    expect(service).toBeTruthy();
  }));
});
