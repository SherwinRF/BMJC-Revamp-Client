import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { HttpClient } from "@angular/common/http";

import { data } from "jquery";
@Component({
  selector: "app-teaching-staff",
  templateUrl: "./teaching-staff.component.html",
  styleUrls: ["./teaching-staff.component.css"],
  providers: [],
})
export class TeachingStaffComponent implements OnInit {
  theme: colorScheme;
  dtOptions: any = {}; // new added
  data3: any;
  d1: any;
  data4: any;

  constructor(
    private themeChanger: ThemeChangerService,
    private httpclient: HttpClient
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.dtOptions = {
      paging: true,
      ordering: true,
      info: true,
      responsive: true,
    }; // new added

    this.httpclient
      .get("http://35.154.255.25:8000/teachers")
      .subscribe((result4) => {
        this.data3 = result4;
        this.data4 = result4;
      }); // new added
  }

  showDetails(event) {
    this.data3 = null;

    let dept = event.target.value;
    if (dept == "All Departments") {
      this.httpclient
        .get("http://35.154.255.25:8000/teachers")
        .subscribe((result4) => {
          this.data3 = result4;
        });

      this.dtOptions = {
        paging: true,
        ordering: true,
        info: true,
        responsive: true,
      };
    } else {
      this.httpclient
        .get("http://35.154.255.25:8000/teachers/" + dept)
        .subscribe((resu) => {
          this.data3 = resu;
        });
    }
  }
}
