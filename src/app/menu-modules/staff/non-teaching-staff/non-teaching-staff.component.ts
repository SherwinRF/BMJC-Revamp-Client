import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { HttpClient } from "@angular/common/http";

import { data } from "jquery";

@Component({
  selector: "app-non-teaching-staff",
  templateUrl: "./non-teaching-staff.component.html",
  styleUrls: ["./non-teaching-staff.component.css"],
  providers: [],
})
export class NonTeachingStaffComponent implements OnInit {
  theme: colorScheme;
  dtOptions: any = {};
  data2: any;

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
    };

    this.httpclient
      .get("http://35.154.255.25:8000/Non-Teaching")
      .subscribe((result3) => {
        this.data2 = result3;
      });
  }
}
