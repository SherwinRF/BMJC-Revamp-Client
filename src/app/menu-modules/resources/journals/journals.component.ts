import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import Resources from "src/app/models/resources";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { ResourcesService } from "../resources.service";

@Component({
  selector: "app-journals",
  templateUrl: "./journals.component.html",
  styleUrls: ["./journals.component.css"],
  providers: [ResourcesService],
})
export class JournalsComponent implements OnInit {
  theme: colorScheme;
  journals: Resources[];

  constructor(
    private themeChanger: ThemeChangerService,
    private resourcesService: ResourcesService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.resourcesService.getResources().subscribe((res) => {
      this.journals = res.filter((item) => item.type === "journals");
    });
  }
}
