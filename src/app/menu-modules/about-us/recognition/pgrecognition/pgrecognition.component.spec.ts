import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PGRecognitionComponent } from './pgrecognition.component';

describe('PGRecognitionComponent', () => {
  let component: PGRecognitionComponent;
  let fixture: ComponentFixture<PGRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PGRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PGRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
