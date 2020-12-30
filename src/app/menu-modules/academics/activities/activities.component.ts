import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { activity } from "../../../models/activity";
import { HttpClient } from "@angular/common/http";
import { AcademicsService } from "../academics.service";
@Component({
  selector: "app-activities",
  templateUrl: "./activities.component.html",
  styleUrls: ["./activities.component.css"],
  providers: [AcademicsService],
})
export class ActivitiesComponent implements OnInit {
  theme: colorScheme;

  //dtOptions: DataTables.Settings = {}; // new added
  dtOptions: any = {};
  Activity: activity[]; // new added

  constructor(
    private themeChanger: ThemeChangerService,
    private httpclient: HttpClient
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    //this.dtOptions = { pagingType: 'full_numbers' }; // new added
    this.dtOptions = {
      paging: true,
      ordering: true,
      info: true,
      //"bootstrap": true
    };

    this.httpclient
      .get("/assets/data/Academic_Activities.json")
      .subscribe((result: activity[]) => {
        this.Activity = result;
      }); // new added
  }
}
