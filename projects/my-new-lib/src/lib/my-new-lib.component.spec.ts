import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewLibComponent } from './my-new-lib.component';

describe('MyNewLibComponent', () => {
  let component: MyNewLibComponent;
  let fixture: ComponentFixture<MyNewLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNewLibComponent]
    });
    fixture = TestBed.createComponent(MyNewLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
