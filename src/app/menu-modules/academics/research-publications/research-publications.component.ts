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
  dtOptions: any = {};
  Research: research[];
  dataURL = "http://35.154.255.25:8000/research_publications/";

  constructor(
    private themeChanger: ThemeChangerService,
    private httpclient: HttpClient
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.httpclient.get(this.dataURL).subscribe((result3: research[]) => {
      this.Research = result3;
    });

    this.dtOptions = {
      paging: true,
      ordering: true,
      info: true,
      responsive: true,
    };
  }

  dept: any = "";
  year: any = "";
  table_filter(event) {
    this.Research = null;
    let years = ["All Years", "2016", "2017", "2018"];

    if (years.includes(event.target.value)) this.year = event.target.value;
    else this.dept = event.target.value;
    let a = this.dept;
    let b = this.year;

    if (
      (this.dept == "All Departments" && this.year == "All Years") ||
      (this.dept == "All Departments" && this.year == "") ||
      (this.dept == "" && this.year == "All Years")
    ) {
      this.dept = "";
      this.year = "";
      this.httpclient.get(this.dataURL).subscribe((result3: research[]) => {
        this.Research = result3;
      });
    }
    if (
      (this.dept != "" && this.year == "") ||
      (this.dept != "" && this.year == "All Years")
    ) {
      this.year = "";
      this.httpclient.get(this.dataURL).subscribe((result3: research[]) => {
        this.Research = result3.filter(function (d) {
          return d.Department == a;
        });
      });
    }
    if (
      (this.dept == "" && this.year != "") ||
      (this.dept == "All Departments" && this.year != "")
    ) {
      this.dept = "";
      this.httpclient.get(this.dataURL).subscribe((result3: research[]) => {
        this.Research = result3.filter(function (d) {
          return d.Year == b;
        });
      });
    }
    if (this.dept != "" && this.year != "") {
      this.httpclient.get(this.dataURL).subscribe((result3: research[]) => {
        this.Research = result3.filter(function (d) {
          return d.Department == a && d.Year == b;
        });
      });
    }
  }
}
