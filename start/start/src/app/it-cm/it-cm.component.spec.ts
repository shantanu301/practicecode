import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCmComponent } from './it-cm.component';

describe('ItCmComponent', () => {
  let component: ItCmComponent;
  let fixture: ComponentFixture<ItCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
