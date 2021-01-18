import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { HospitalService } from "../hospital.service";

@Component({
  selector: "app-hospital",
  templateUrl: "./hospital.component.html",
  styleUrls: ["./hospital.component.css"],
  providers: [HospitalService],
})
export class HospitalComponent implements OnInit {
  //Pie Chart 1

  titlepie1 = "Medicine and allied specialties: 550 beds";
  typepie1 = "PieChart";
  datapie1 = [
    ["Gen. Medicine", 270],
    ["Paediatrics", 150],
    ["Tuberculosis & Respiratory Diseases", 40],
    ["Dermatology, Venereology & Leprosy", 30],
    ["Psychiatry", 60],
  ];
  columnNamespie1 = ["Browser", "Percentage"];
  optionspie1 = {
    is3D: true,
  };
  widthpie1;
  heightpie1;

  //Pie Chart 2

  titlepie2 = "Surgery and allied specialties: 530 beds";
  typepie2 = "PieChart";
  datapie2 = [
    ["Gen. Medicine", 230],
    ["Orthopedics", 120],
    ["Opthalmology", 120],
    ["Oto-rhino-laryngology", 60],
  ];
  columnNamespie2 = ["Browser", "Percentage"];
  optionspie2 = {
    is3D: true,
  };
  widthpie2;
  heightpie2;

  //Pie Chart 3

  titlepie3 = "Obstetrics & ANC Gynecology: 180 beds";
  typepie3 = "PieChart";
  datapie3 = [["Obstetrics & ANC Gynecology", 180]];
  columnNamespie3 = ["Browser", "Percentage"];
  optionspie3 = {
    is3D: true,
  };
  widthpie3;
  heightpie3;

  //Pie Chart 4 main

  titlepie4 = "Total Beds: 1260 beds";
  typepie4 = "PieChart";
  datapie4 = [
    ["Medicine and allied specialties", 550],
    ["Surgery and allied specialties", 530],
    ["Obstetrics & ANC Gynecology", 180],
  ];
  columnNamespie4 = ["Browser", "Percentage"];
  optionspie4 = {
    is3D: true,
  };
  widthpie4;
  heightpie4;

  theme: colorScheme;
  dtOptions: any = {}; // new added
  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.dtOptions = {
      paging: true,
      ordering: true,
      info: true,
      pagingType: "full_numbers",
      responsive: true,
    }; // new added
  }
}
