import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import ColorScheme from "../interfaces/ColorScheme";

@Injectable({
  providedIn: "root",
})
export class ThemeChangerService {
  theme: {
    mainColors: ColorScheme;
    blueAndRefreshing: ColorScheme;
  } = {
    mainColors: {
      primary: "#007fff",
      secondary: "#ff8811",
      primaryHover: "#fff",
      text: "#2a2a2a",
      background: "#f0f0f0",
      error: "#ff0000",
      helper: "#666666",
      disabledText: "#888",
      disabledBg: "#ccc",
    },
    blueAndRefreshing: {
      primary: "#25274d",
      secondary: "#2e9cca",
      primaryHover: "#fff",
      text: "#000000",
      background: "#ffffff",
      error: "#ff0000",
      helper: "#29648a",
      disabledText: "#464866",
      disabledBg: "#aaabb8",
    },
  };

  constructor() {}

  currentTheme: BehaviorSubject<ColorScheme> = new BehaviorSubject(
    this.theme.mainColors
  );

  subscribeToTheme() {
    return this.currentTheme.asObservable();
  }

  setCurrentTheme(newTheme: string) {
    this.currentTheme.next(this.theme[`${newTheme}`]);
  }
}
