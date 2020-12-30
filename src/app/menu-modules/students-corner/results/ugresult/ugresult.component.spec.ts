import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UGResultComponent } from './ugresult.component';

describe('UGResultComponent', () => {
  let component: UGResultComponent;
  let fixture: ComponentFixture<UGResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UGResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UGResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
