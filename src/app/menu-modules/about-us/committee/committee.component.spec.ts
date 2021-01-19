import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CommitteeComponent } from "./committee.component";

describe("CommitteeComponent", () => {
  let component: CommitteeComponent;
  let fixture: ComponentFixture<CommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommitteeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create component Committee", () => {
    expect(component).toBeTruthy();
  });
  it('should have heading "Committe"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".decorated span").textContent).toEqual(
      "Committee"
    );
  });
  it('should contain pdf path  for  "Committe PDF"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".pdf-holder iframe")["src"]).toContain(
      "/assets/pdfs/committees.pdf#view=FitH"
    );
  });
});
