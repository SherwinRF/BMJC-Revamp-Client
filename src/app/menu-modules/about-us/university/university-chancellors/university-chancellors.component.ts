import { Component, OnInit } from '@angular/core';
import colorScheme from 'src/app/interfaces/ColorScheme';
import { ThemeChangerService } from 'src/app/services/theme-changer.service';

@Component({
  selector: "app-university-chancellors",
  templateUrl: "./university-chancellors.component.html",
  styleUrls: ["./university-chancellors.component.css"],
})
export class UniversityChancellorsComponent implements OnInit {
  theme: colorScheme;

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
