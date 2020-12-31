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
    }; // new added

    this.httpclient
      .get("http://localhost:8000/Teachers")
      .subscribe((result4) => {
        this.data3 = result4;
        console.log(result4);
      }); // new added
  }
}
