import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import Resources from "src/app/models/resources";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { ResourcesService } from "../resources.service";

@Component({
  selector: "app-videos-and-ppts",
  templateUrl: "./videos-and-ppts.component.html",
  styleUrls: ["./videos-and-ppts.component.css"],
  providers: [ResourcesService],
})
export class VideosAndPptsComponent implements OnInit {
  theme: colorScheme;
  videos: Resources[];
  ppts: Resources[];

  constructor(
    private themeChanger: ThemeChangerService,
    private resourcesService: ResourcesService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.resourcesService.getResources().subscribe((res) => {
      this.videos = res.filter((item) => item.type === "educational-video");
    });

    this.resourcesService.getResources().subscribe((res) => {
      this.ppts = res.filter((item) => item.type === "ppt");
    });
  }
}
