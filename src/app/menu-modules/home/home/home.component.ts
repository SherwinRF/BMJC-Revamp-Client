import { registerLocaleData } from "@angular/common";
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
      $(".totop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 50);
      });
      $(window).scroll(function () {
        if (
          location.href == "http://localhost:4200/" ||
          location.href == "http://localhost:4200/home" ||
          location.href == "https://bjmcpune.netlify.app" ||
          location.href == "https://bjmcpune.netlify.app/home" ||
          location.href == "https://bjmcpune-development.netlify.app" ||
          location.href == "https://bjmcpune-development.netlify.app/home"
        ) {
          // console.log(location.href);
          var oTop = $("#stats").offset().top - window.innerHeight;
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
        }
      });
    });
    this.linkData.getLinks().subscribe((links) => {
      this.data = links;
    });
    this.linkData.getLinks2().subscribe((links2) => {
      this.data2 = links2;
    });
  }
  register(event) {
    this.linkData.register(
      event.srcElement[0].value,
      event.srcElement[2].value,
      event.srcElement[4].value,
      event.srcElement[1].value,
      event.srcElement[3].value
    );
    alert("Registration Success");
    event.srcElement[0].value = "";
    event.srcElement[1].value = "";
    event.srcElement[2].value = "";
    event.srcElement[3].value = "";
    event.srcElement[4].value = "";
  }
}
