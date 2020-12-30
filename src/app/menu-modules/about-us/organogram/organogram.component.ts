import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";

@Component({
  selector: "app-organogram",
  templateUrl: "./organogram.component.html",
  styleUrls: ["./organogram.component.css"],
})
export class OrganogramComponent implements OnInit {
  theme: colorScheme;

  deansNum = [0, 1, 2, 3];
  medSupNum = [4, 5];
  officeSupNum = [6, 7, 8];
  adminOffNum = [9, 10, 11];

  staff = [
    {
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
      Designation: "Dy.Dean (UG)",
      Name: "Dr. Arun N. Kowale",
      Address:
        "R-4, vijaygad, SBI CO-OP Hsg society shivtrith nagar,Paud road kothrud. Pune-411038",
      Contact: {
        Tel: ["020-26102296", "020-6123872"],
        Cell: "9960762233",
      },
    },
    {
      Designation: "Dy. Dean (PG)",
      Name: "Dr. Samir V. Joshi",
      Address: "Hirai Niwas, 54/6A kothrud, Pune-411038.",
      Contact: {
        Tel: ["020-26102206"],
        Cell: "8329418074",
      },
    },
    {
      Designation: "Vice.Dean (Administration)",
      Name: "Dr. Muralidhar Tambe",
      Address: "A/602,Gagan-Galaxy society,bibwewadi-Kondwa road, Pune-411037",
      Contact: {
        Tel: ["020-26102302", "020-29701044"],
      },
    },
    {
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
      Designation: "Dy. Medical Superintendent",
      Name: "Dr. Manjeet Santre",
      Address: "Rector's Bunglow,BJGMC Boys hostel, Pune-411001",
      Contact: {
        Tel: ["020-26102203", "020-26102461"],
        Cell: "9423421455",
      },
    },
    {
      Designation: "Office Superintendent (SGH)",
      Name: "Mr. Sanjay B. Dahibhate",
      Address: "Flat no-906, Saptagiri Appt. pancard road Pune-411035",
      Contact: {
        Tel: ["020-26102422"],
        Cell: "9403532271",
      },
    },
    {
      Designation: "Office Superintendent (Nursing)",
      Name: "Mr. Sham. S. Teli",
      Address: "Plot no-71-A Sahkar Vrund Society Paud Road pune-4110",
      Contact: {
        Tel: ["020-26102231"],
        Cell: "9225501440",
      },
    },
    {
      Designation: "Office Superintendent (SGH)",
      Name: "Mr. P. M. Adhari",
      Address: "19/321,Ram Society Yerwada, Pune-411006",
      Contact: {
        Tel: ["020-26128000"],
      },
    },
    {
      Designation: "Administrative Officer (BJGMC / SGH)",
      Name: "Mr. Ganesh N. Badadare",
      Address: "Pollens Residences A-wing, Flat No.402, Kalepadal, Hadapsar-28",
      Contact: {
        Tel: ["020-29700047"],
        Cell: "9869676627",
      },
    },
    {
      Designation: "Administrative officer (BJGMC)",
      Name: "Mr. Suresh.V.Bonawale",
      Address:
        "Flat no Samarth park hou-society mohanwadi, yerwada,pune-411006.",
      Contact: {
        Tel: ["020-26102303", "020-26130976"],
        Cell: "9096632184",
      },
    },
    {
      Designation: "Administrative officer (SGH)",
      Name: "Mr. Goroba.Y. Awate",
      Address:
        "Gokul Nagari 'C' Build Flat no-3,Tulgabhavani nagar pimple gurav pune-411061",
      Contact: {
        Tel: ["020-26102202", "020-26130962"],
      },
    },
  ];

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
