import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { HttpClient } from "@angular/common/http";
import { awards } from "../../../models/awards";
import { AcademicsService } from "../academics.service";
@Component({
  selector: "app-awards-and-achievements",
  templateUrl: "./awards-and-achievements.component.html",
  styleUrls: ["./awards-and-achievements.component.css"],
  providers: [AcademicsService],
})
export class AwardsAndAchievementsComponent implements OnInit {
  theme: colorScheme;
  dtOptions: any = {}; // new added
  Awards: awards[]; // new added

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
      .get("/assets/data/Awards_Achievements.json")
      .subscribe((result2: awards[]) => {
        this.Awards = result2;
      }); // new added
  }
}
