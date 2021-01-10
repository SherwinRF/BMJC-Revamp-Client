import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { OrganogramService } from "./organogram.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-organogram",
  templateUrl: "./organogram.component.html",
  styleUrls: ["./organogram.component.css"],
})
export class OrganogramComponent implements OnInit {
  theme: colorScheme;
  dynamStaff: any[];

  constructor(
    private themeChanger: ThemeChangerService,
    private staffservice: OrganogramService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.staffservice.getDynamicStaff().subscribe((res) => {
      this.dynamStaff = res;
    });
  }
}
