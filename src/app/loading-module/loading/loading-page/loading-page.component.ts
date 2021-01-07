import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loading-page",
  templateUrl: "./loading-page.component.html",
  styleUrls: ["./loading-page.component.css"],
})
export class LoadingPageComponent implements OnInit {
  loadingTexts: string[] = [
    "loading1",
    "loading2",
    "loading3",
    "loading4",
    "loading5",
  ];
  currentLoadingText: string;
  constructor() {}

  ngOnInit(): void {
    this.currentLoadingText = this.loadingTexts[Math.floor(Math.random() * 5)];
  }
}
