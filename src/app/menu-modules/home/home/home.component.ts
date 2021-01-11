import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";
import { HomeService } from "../home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [
    "./home.component.css",
    "../../../../styles/css_slider.css",
    "../../../../styles/font-awesome.min.css",
  ],
})
export class HomeComponent implements OnInit {
  theme: colorScheme;
  data: any;
  data2: any;

  constructor(
    private themeChanger: ThemeChangerService,
    private linkData: HomeService
  ) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });

    $(function () {
      var a = 0;

      $("#toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 50);
      });

      $(window).scroll(function () {
        var oTop = $("#stats").offset().top - window.innerHeight;

        // console.log($(window).scrollTop());

        if (a == 0 && $(window).scrollTop() > oTop) {
          $(".Count").each(function () {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 5000,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                    a = 1;
                  },
                }
              );
          });
        }
      });
    });

    this.linkData.getLinks().subscribe((links) => {
      // console.log("LINKS",links);
      this.data = links;
    });

    this.linkData.getLinks2().subscribe((links2) => {
      // console.log("LINKS_2",links2);
      this.data2 = links2;
    });
  }
}
