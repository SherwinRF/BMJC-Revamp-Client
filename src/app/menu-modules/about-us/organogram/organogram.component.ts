import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { OrganogramService } from "./organogram.service";

@Component({
  selector: "app-organogram",
  templateUrl: "./organogram.component.html",
  styleUrls: ["./organogram.component.css"],
})
export class OrganogramComponent implements OnInit {
  theme: colorScheme;

  staff = [];
  deansData = [];
  medSupData = [];
  officeSupData = [];
  adminOffData = [];

  constructor(
    private themeChanger: ThemeChangerService,
    private staffservice: OrganogramService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
    this.staff = this.staffservice.getStaff();
    this.deansData = this.staffservice.getDeans();
    this.medSupData = this.staffservice.getMedicalSuperintendents();
    this.officeSupData = this.staffservice.getOfficeSuperintendents();
    this.adminOffData = this.staffservice.getAdminOfficers();
    console.log(this.adminOffData);
  }
}
