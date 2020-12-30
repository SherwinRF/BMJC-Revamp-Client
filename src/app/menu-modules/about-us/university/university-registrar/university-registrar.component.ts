import { Component, OnInit } from '@angular/core';
import colorScheme from 'src/app/interfaces/ColorScheme';
import { ThemeChangerService } from 'src/app/services/theme-changer.service';

@Component({
  selector: "app-university-registrar",
  templateUrl: "./university-registrar.component.html",
  styleUrls: ["./university-registrar.component.css"],
})
export class UniversityRegistrarComponent implements OnInit {
  theme: colorScheme;

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
