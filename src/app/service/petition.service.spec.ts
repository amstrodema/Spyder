/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetitionService } from './petition.service';

describe('Service: Petition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetitionService]
    });
  });

  it('should ...', inject([PetitionService], (service: PetitionService) => {
    expect(service).toBeTruthy();
  }));
});
