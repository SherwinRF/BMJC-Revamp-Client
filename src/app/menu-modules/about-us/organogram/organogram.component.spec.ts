import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OrganogramComponent } from "./organogram.component";

import { HttpClientModule } from "@angular/common/http";
import { OrganogramService } from "./organogram.service";
import { of } from "rxjs";

describe("OrganogramComponent", () => {
  let component: OrganogramComponent;
  let fixture: ComponentFixture<OrganogramComponent>;
  let service: OrganogramService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganogramComponent],
      imports: [HttpClientModule],
      providers: [OrganogramService],
    }).compileComponents();
    service = TestBed.inject(OrganogramService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should receive correct data from service", () => {
    let response;
    let expectedData = [
      {
        _id: "5feaaef86f6dd7284084b92b",
        Designation: "Administrative Officer (BJGMC / SGH)",
        Name: "Mr. Ganesh N. Badadare",
        Address:
          "Pollens Residences A-wing, Flat No.402, Kalepadal, Hadapsar-28",
        Contact: { Tel: ["020-29700047"], Cell: "9869676627" },
      },
      {
        _id: "5feaaef86f6dd7284084b927",
        Designation: "Dy. Medical Superintendent",
        Name: "Dr. Manjeet Santre",
        Address: "Rector's Bunglow,BJGMC Boys hostel, Pune-411001",
        Contact: { Tel: ["020-26102203", "020-26102461"], Cell: "9423421455" },
      },
      {
        _id: "5feaaef86f6dd7284084b924",
        Designation: "Dy. Dean (PG)",
        Name: "Dr. Samir V. Joshi",
        Address: "Hirai Niwas, 54/6A kothrud, Pune-411038.",
        Contact: { Tel: ["020-26102206"], Cell: "8329418074" },
      },
      {
        _id: "5feaaef86f6dd7284084b928",
        Designation: "Office Superintendent (SGH)",
        Name: "Mr. Sanjay B. Dahibhate",
        Address: "Flat no-906, Saptagiri Appt. pancard road Pune-411035",
        Contact: { Tel: ["020-26102422"], Cell: "9403532271" },
      },
      {
        _id: "5feaaef86f6dd7284084b929",
        Designation: "Office Superintendent (Nursing)",
        Name: "Mr. Sham. S. Teli",
        Address: "Plot no-71-A Sahkar Vrund Society Paud Road pune-4110",
        Contact: { Tel: ["020-26102231"], Cell: "9225501440" },
      },
      {
        _id: "5feaaef86f6dd7284084b92c",
        Designation: "Administrative officer (BJGMC)",
        Name: "Mr. Suresh.V.Bonawale",
        Address:
          "Flat no Samarth park hou-society mohanwadi, yerwada,pune-411006.",
        Contact: { Tel: ["020-26102303", "020-26130976"], Cell: "9096632184" },
      },
      {
        _id: "5feaaef86f6dd7284084b923",
        Designation: "Dy.Dean (UG)",
        Name: "Dr. Arun N. Kowale",
        Address:
          "R-4, vijaygad, SBI CO-OP Hsg society shivtrith nagar,Paud road kothrud. Pune-411038",
        Contact: { Tel: ["020-26102296", "020-6123872"], Cell: "9960762233" },
      },
      {
        _id: "5feaaef86f6dd7284084b922",
        Designation: "Dean",
        Name: "Dr. Ajay. S. Chandanwale",
        Address: "D-401,R.K.Pride, New D.P.Road, Kothrud, Pune-411037",
        Contact: {
          Tel: ["020-26102299", "020-6128000"],
          Fax: "02026126868",
          Cell: "9420697474",
          Email: "deanbjmcpune@gmail.com",
        },
      },
      {
        _id: "5feaaef86f6dd7284084b925",
        Designation: "Vice.Dean (Administration)",
        Name: "Dr. Muralidhar Tambe",
        Address:
          "A/602,Gagan-Galaxy society,bibwewadi-Kondwa road, Pune-411037",
        Contact: { Tel: ["020-26102302", "020-29701044"] },
      },
      {
        _id: "5feaaef86f6dd7284084b926",
        Designation: "Medical Superintendent",
        Name: "Dr. S. B. Punpale",
        Address:
          "Flat no.201, B-9 Building Bhujbal Township nr.Eklavya College, Kothrud,Pune.411038",
        Contact: {
          Tel: ["020-26102344"],
          Cell: "9422189531",
          Email: "sbpunpale@gmail.com",
        },
      },
      {
        _id: "5feaaef86f6dd7284084b92a",
        Designation: "Office Superintendent (SGH)",
        Name: "Mr. P. M. Adhari",
        Address: "19/321,Ram Society Yerwada, Pune-411006",
        Contact: { Tel: ["020-26128000"] },
      },
      {
        _id: "5feaaef86f6dd7284084b92d",
        Designation: "Administrative officer (SGH)",
        Name: "Mr. Goroba.Y. Awate",
        Address:
          "Gokul Nagari 'C' Build Flat no-3,Tulgabhavani nagar pimple gurav pune-411061",
        Contact: { Tel: ["020-26102202", "020-26130962"] },
      },
    ];

    spyOn(service, "getDynamicStaff").and.returnValue(of(expectedData));
    service.getDynamicStaff().subscribe((res) => {
      response = res;
    });
    expect(response).toEqual(expectedData);
    expect(response.length).toEqual(12);
  });
});
