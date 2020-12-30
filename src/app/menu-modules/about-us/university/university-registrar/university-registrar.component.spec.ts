import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRegistrarComponent } from './university-registrar.component';

describe('UniversityRegistrarComponent', () => {
  let component: UniversityRegistrarComponent;
  let fixture: ComponentFixture<UniversityRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
