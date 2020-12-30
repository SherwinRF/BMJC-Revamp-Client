import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { HttpClient } from "@angular/common/http";
import { research } from "../../../models/research";
import { AcademicsService } from "../academics.service";
@Component({
  selector: "app-research-publications",
  templateUrl: "./research-publications.component.html",
  styleUrls: ["./research-publications.component.css"],
  providers: [AcademicsService],
})
export class ResearchPublicationsComponent implements OnInit {
  theme: colorScheme;
  dtOptions: any = {}; // new added
  Research: research[]; // new added

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
      .get("/assets/data/Research_Publications.json")
      .subscribe((result3: research[]) => {
        this.Research = result3;
      }); // new added
  }
}
