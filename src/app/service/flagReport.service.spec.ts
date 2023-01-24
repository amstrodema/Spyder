/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlagReportService } from './flagReport.service';

describe('Service: FlagReport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlagReportService]
    });
  });

  it('should ...', inject([FlagReportService], (service: FlagReportService) => {
    expect(service).toBeTruthy();
  }));
});
