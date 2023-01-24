/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeatureGroupService } from './feature-group.service';

describe('Service: FeatureGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureGroupService]
    });
  });

  it('should ...', inject([FeatureGroupService], (service: FeatureGroupService) => {
    expect(service).toBeTruthy();
  }));
});
