/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeathService } from './death.service';

describe('Service: Death', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeathService]
    });
  });

  it('should ...', inject([DeathService], (service: DeathService) => {
    expect(service).toBeTruthy();
  }));
});
