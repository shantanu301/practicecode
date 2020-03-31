import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpinComponent } from './forgetpin.component';

describe('ForgetpinComponent', () => {
  let component: ForgetpinComponent;
  let fixture: ComponentFixture<ForgetpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
