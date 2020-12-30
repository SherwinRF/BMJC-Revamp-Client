import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { ResultService } from "../result.service";
import { Results, StudentResults } from "../../../../models/results.model";

@Component({
  selector: "app-pgresult",
  templateUrl: "./pgresult.component.html",
  styleUrls: ["./pgresult.component.css"],
  providers: [ResultService],
})
export class PGResultComponent implements OnInit {
  theme: colorScheme;
  Results: Results[] = [];
  result1: StudentResults[] = [];
  constructor(
    private themeChanger: ThemeChangerService,
    private result: ResultService
  ) {
    this.Results = result.getStoredResult();
    this.result1 = this.Results[1]["student_results"];
  }

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
