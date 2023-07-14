import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherFakeComponent } from './another-fake.component';

describe('AnotherFakeComponent', () => {
  let component: AnotherFakeComponent;
  let fixture: ComponentFixture<AnotherFakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherFakeComponent]
    });
    fixture = TestBed.createComponent(AnotherFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
