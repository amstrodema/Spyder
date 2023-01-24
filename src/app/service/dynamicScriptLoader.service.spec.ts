/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DynamicScriptLoaderService } from './dynamicScriptLoader.service';

describe('Service: DynamicScriptLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicScriptLoaderService]
    });
  });

  it('should ...', inject([DynamicScriptLoaderService], (service: DynamicScriptLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
