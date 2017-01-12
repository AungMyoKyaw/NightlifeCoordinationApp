/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MygoinglistService } from './mygoinglist.service';

describe('MygoinglistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MygoinglistService]
    });
  });

  it('should ...', inject([MygoinglistService], (service: MygoinglistService) => {
    expect(service).toBeTruthy();
  }));
});
