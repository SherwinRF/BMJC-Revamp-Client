import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UGRecognitionComponent } from './ugrecognition.component';

describe('UGRecognitionComponent', () => {
  let component: UGRecognitionComponent;
  let fixture: ComponentFixture<UGRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UGRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UGRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
