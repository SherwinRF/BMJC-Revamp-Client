import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityChancellorsComponent } from './university-chancellors.component';

describe('UniversityChancellorsComponent', () => {
  let component: UniversityChancellorsComponent;
  let fixture: ComponentFixture<UniversityChancellorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityChancellorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityChancellorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
