import { Component, OnInit } from "@angular/core";
import { ResultService } from "../result.service";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { Results, StudentResults } from "../../../../models/results.model";

@Component({
  selector: "app-ugresult",
  templateUrl: "./ugresult.component.html",
  styleUrls: ["./ugresult.component.css"],
  providers: [ResultService],
})
export class UGResultComponent implements OnInit {
  theme: colorScheme;
  Results: Results[] = [];
  result1: StudentResults[] = [];
  constructor(
    private themeChanger: ThemeChangerService,
    private result: ResultService
  ) {
    this.Results = result.getStoredResult();
    this.result1 = this.Results[0]["student_results"];
  }

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
