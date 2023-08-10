import { TestBed } from '@angular/core/testing';

import { MyNewLibService } from './my-new-lib.service';

describe('MyNewLibService', () => {
  let service: MyNewLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNewLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
