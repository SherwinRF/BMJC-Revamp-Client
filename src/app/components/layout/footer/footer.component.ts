import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: [
    "./footer.component.css",
    "../../../../styles/css_slider.css",
    "../../../../styles/font-awesome.min.css",
  ],
})
export class FooterComponent implements OnInit {
  theme: colorScheme;
  constructor(private themeChanger: ThemeChangerService) {}
  toggle: boolean = false;
  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
  closeFun() {
    if (this.toggle) this.toggle = false;
    else this.toggle = true;
  }
}
