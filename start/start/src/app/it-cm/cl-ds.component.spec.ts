import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClDsComponent } from './cl-ds.component';

describe('ClDsComponent', () => {
  let component: ClDsComponent;
  let fixture: ComponentFixture<ClDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
