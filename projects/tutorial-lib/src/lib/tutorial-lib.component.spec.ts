import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialLibComponent } from './tutorial-lib.component';

describe('TutorialLibComponent', () => {
  let component: TutorialLibComponent;
  let fixture: ComponentFixture<TutorialLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
