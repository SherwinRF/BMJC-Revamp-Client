import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
declare var $: any;
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  theme: colorScheme;

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    //JQuery code to hide navbar dropdown on click
    $(function () {
      $(".navbar-collapse").click(function () {
        <any>$(".navbar-collapse").collapse("hide");
      });
    });
  }

  changeTheme(value: string) {
    this.themeChanger.setCurrentTheme(value);
  }
}
