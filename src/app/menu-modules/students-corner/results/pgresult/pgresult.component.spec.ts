import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PGResultComponent } from './pgresult.component';

describe('PGResultComponent', () => {
  let component: PGResultComponent;
  let fixture: ComponentFixture<PGResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PGResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PGResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
