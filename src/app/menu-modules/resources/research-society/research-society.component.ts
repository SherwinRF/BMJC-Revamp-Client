import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import Resources from "src/app/models/resources";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { ResourcesService } from "../resources.service";

@Component({
  selector: "app-research-society",
  templateUrl: "./research-society.component.html",
  styleUrls: ["./research-society.component.css"],
  providers: [ResourcesService],
})
export class ResearchSocietyComponent implements OnInit {
  theme: colorScheme;
  researchSocieties: Resources[];

  constructor(
    private themeChanger: ThemeChangerService,
    private resourcesService: ResourcesService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    this.researchSocieties = this.resourcesService.getResearchSociety();
  }
}
