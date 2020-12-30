import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { StaffService } from "../staff.service";

@Component({
  selector: "app-teaching-staff",
  templateUrl: "./teaching-staff.component.html",
  styleUrls: ["./teaching-staff.component.css"],
  providers: [StaffService],
})
export class TeachingStaffComponent implements OnInit {
  theme: colorScheme;
  dataTable: any;
  data: any;

  constructor(
    private themeChanger: ThemeChangerService,
    private postdata: StaffService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.postdata.getresult().subscribe((result) => {
      console.log(result);
      this.data = result;
    });
  }
}
