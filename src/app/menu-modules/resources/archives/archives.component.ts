import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import Resources from "src/app/models/resources";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { ResourcesService } from "../resources.service";

@Component({
  selector: "app-archives",
  templateUrl: "./archives.component.html",
  styleUrls: ["./archives.component.css"],
  providers: [ResourcesService],
})
export class ArchivesComponent implements OnInit {
  theme: colorScheme;
  archives: Resources[] = [];

  constructor(
    private themeChanger: ThemeChangerService,
    private resourcesService: ResourcesService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.resourcesService.getResources().subscribe((res) => {
      this.archives = res.filter((item) => item.type === "archive");
    });
  }
}
