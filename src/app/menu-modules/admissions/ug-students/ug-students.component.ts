import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { AdmissionsService } from "../admissions.service";
import { data } from "jquery";

@Component({
  selector: "app-ug-students",
  templateUrl: "./ug-students.component.html",
  styleUrls: ["./ug-students.component.css"],
})
export class UgStudentsComponent implements OnInit {
  theme: colorScheme;

  ugstore: any[];
  title: String = "UG Results Overview";
  data: any[] = [];
  columnNames = ["Result", "Percentage"];
  type = "PieChart";
  options = {
    slices: {
      0: { color: "green" },
      1: { color: "red" },
      2: { color: "orange" },
      3: { color: "blue" },
    },
    pieHole: 0.4,
  };
  width;
  height;

  constructor(
    private themeChanger: ThemeChangerService,
    private ugfetch: AdmissionsService
  ) {
    ugfetch.getpdfug().subscribe((data) => {
      this.ugstore = data;
    });
    ugfetch.getchartug().subscribe((data) => {
      this.initchart(data);
    });
  }

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
  initchart(Res_data) {
    for (var i = 0; i < Res_data.length; i++) {
      if (Res_data[i]["_id"] == "PASS") {
        this.data[0] = [Res_data[i]["_id"], Res_data[i]["count"]];
      } else if (Res_data[i]["_id"] == "FAIL") {
        this.data[1] = [Res_data[i]["_id"], Res_data[i]["count"]];
      } else if (Res_data[i]["_id"] == "FAILS-ATKT") {
        this.data[2] = [Res_data[i]["_id"], Res_data[i]["count"]];
      } else this.data[3] = [Res_data[i]["_id"], Res_data[i]["count"]];
    }
    this.drawchart();
  }
  drawchart() {
    // if (document.documentElement.clientWidth > 1024) {
    //   this.width = 550;
    //   this.height = 320;
    // }
    // if (
    //   document.documentElement.clientWidth <= 1024 &&
    //   document.documentElement.clientWidth >= 992
    // ) {
    //   this.width = 450;
    //   this.height = 320;
    // }
    if (
      document.documentElement.clientWidth <= 991 &&
      document.documentElement.clientWidth >= 768
    ) {
      this.width = 340;
      this.height = 360;
    }
    // if (
    //   document.documentElement.clientWidth <= 767 &&
    //   document.documentElement.clientWidth >= 575
    // ) {
    //   this.width = 350;
    //   this.height = 350;
    // }
    // if (
    //   document.documentElement.clientWidth <= 574 &&
    //   document.documentElement.clientWidth >= 479
    // ) {
    //   this.width = 508;
    //   this.height = 300;
    // }
    // if (document.documentElement.clientWidth <= 480) {
    //   this.width = 328;
    //   this.height = 253;
    // }
  }
}
