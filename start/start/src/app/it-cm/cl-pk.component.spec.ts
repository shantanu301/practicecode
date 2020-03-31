import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClPkComponent } from './cl-pk.component';

describe('ClPkComponent', () => {
  let component: ClPkComponent;
  let fixture: ComponentFixture<ClPkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClPkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClPkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
