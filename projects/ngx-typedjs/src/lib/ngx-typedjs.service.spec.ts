import { TestBed } from '@angular/core/testing';

import { NgxTypedjsService } from './ngx-typedjs.service';

describe('NgxTypedjsService', () => {
  let service: NgxTypedjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTypedjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
