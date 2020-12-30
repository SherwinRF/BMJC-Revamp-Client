import { Component, OnInit } from '@angular/core';
import colorScheme from 'src/app/interfaces/ColorScheme';
import { ThemeChangerService } from 'src/app/services/theme-changer.service';

@Component({
  selector: "app-university-details",
  templateUrl: "./university-details.component.html",
  styleUrls: ["./university-details.component.css"],
})
export class UniversityDetailsComponent implements OnInit {
  theme: colorScheme;

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
