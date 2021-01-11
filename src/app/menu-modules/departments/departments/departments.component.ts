import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { DepartmentsService } from "../departments.service";

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html",
  styleUrls: ["./departments.component.css"],
  providers: [DepartmentsService],
})
export class DepartmentsComponent implements OnInit {
  theme: colorScheme;
  data: any[];

  constructor(
    private themeChanger: ThemeChangerService,
    private deptservice: DepartmentsService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
    this.deptservice.getData().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }
}
