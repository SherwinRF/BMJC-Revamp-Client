import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { HospitalService } from "../hospital.service";

@Component({
  selector: "app-hospital",
  templateUrl: "./hospital.component.html",
  styleUrls: ["./hospital.component.css"],
  providers: [HospitalService],
})
export class HospitalComponent implements OnInit {
  theme: colorScheme;

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
