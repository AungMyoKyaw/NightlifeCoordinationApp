/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchyelpService } from './searchyelp.service';

describe('SearchyelpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchyelpService]
    });
  });

  it('should ...', inject([SearchyelpService], (service: SearchyelpService) => {
    expect(service).toBeTruthy();
  }));
});
