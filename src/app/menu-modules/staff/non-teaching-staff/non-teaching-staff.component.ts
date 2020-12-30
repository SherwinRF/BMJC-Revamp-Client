import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { StaffService } from "../staff.service";

@Component({
  selector: "app-non-teaching-staff",
  templateUrl: "./non-teaching-staff.component.html",
  styleUrls: ["./non-teaching-staff.component.css"],
  providers: [StaffService],
})
export class NonTeachingStaffComponent implements OnInit {
  theme: colorScheme;
  data2: any;

  constructor(
    private themeChanger: ThemeChangerService,
    private postdata: StaffService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.postdata.getresult2().subscribe((result2) => {
      console.log(result2);
      this.data2 = result2;
    });
  }
}
