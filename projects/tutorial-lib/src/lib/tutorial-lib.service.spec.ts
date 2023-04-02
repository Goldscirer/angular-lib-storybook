import { TestBed } from '@angular/core/testing';

import { TutorialLibService } from './tutorial-lib.service';

describe('TutorialLibService', () => {
  let service: TutorialLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
